/* Modelos físicos em unidades SI. Sem dependências externas. */
const SIGMA=5.670374419e-8;
const materials={aluminio:{name:'Alumínio',k:205,c:900,alpha:23e-6},cobre:{name:'Cobre',k:385,c:385,alpha:17e-6},aco:{name:'Aço carbono',k:50,c:470,alpha:12e-6}};
function conduction(p){const q=p.k*p.A*(p.Th-p.Tc)/p.L;return {q,rows:Array.from({length:51},(_,i)=>{let x=p.L*i/50;return[x,p.Th+(p.Tc-p.Th)*x/p.L]})};}
function convection(p){const tau=p.m*p.c/(p.h*p.A);return {tau,rows:Array.from({length:201},(_,i)=>{let t=p.duration*i/200;return[t,p.Ta+(p.T0-p.Ta)*Math.exp(-t/tau)]})};}
function radiation(p){/* RK4 com passo limitado pela escala térmica: evita oscilações e temperaturas não físicas. */
 const f=T=>-p.e*SIGMA*p.A/(p.m*p.c)*((T+273.15)**4-(p.Ta+273.15)**4);
 let T=p.T0,t=0,rows=[[0,T]],target=p.duration/200;
 for(let i=1;i<=200;i++){const end=i*target;while(t<end){const rate=4*p.e*SIGMA*p.A*Math.max(T+273.15,p.Ta+273.15)**3/(p.m*p.c);const dt=Math.min(end-t,rate>0?0.15/rate:end-t);if(dt<=0)break;let a=f(T),b=f(T+dt*a/2),c=f(T+dt*b/2),d=f(T+dt*c);T+=dt*(a+2*b+2*c+d)/6;t+=dt;}rows.push([end,T]);}return{q:p.e*SIGMA*p.A*((p.T0+273.15)**4-(p.Ta+273.15)**4),rows};}
function expansion(p){return{delta:p.alpha*p.L0*(p.Tf-p.T0),rows:Array.from({length:51},(_,i)=>{let T=p.T0+(p.Tf-p.T0)*i/50;return[T,1000*p.alpha*p.L0*(T-p.T0)]})};}
if(typeof module!=='undefined')module.exports={conduction,convection,radiation,expansion};
