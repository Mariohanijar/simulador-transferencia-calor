const assert=require('node:assert/strict');const {conduction,convection,radiation,expansion}=require('./modelos.js');
const near=(a,b,t=1e-6)=>assert.ok(Math.abs(a-b)<t,`${a} ≠ ${b}`);
near(conduction({k:205,A:1,Th:100,Tc:25,L:.05}).q,307500);
near(convection({m:1,c:900,h:10,A:.1,Ta:25,T0:90,duration:3600}).rows.at(-1)[1],26.1905165278);
near(expansion({alpha:23e-6,L0:2,T0:20,Tf:100}).delta,.00368);
assert.ok(expansion({alpha:12e-6,L0:2,T0:100,Tf:20}).delta<0);
for(const e of [0,.1,.9,1]){let r=radiation({e,A:.1,m:1,c:900,T0:200,Ta:25,duration:3600});assert.ok(r.rows.every((r,i,a)=>r[1]>=25&&r[1]<=200&&(i===0||r[1]<=a[i-1][1])));if(e===0)near(r.rows.at(-1)[1],200);}
near(radiation({e:.9,A:.1,m:1,c:900,T0:25,Ta:25,duration:3600}).rows.at(-1)[1],25);
console.log('Modelos verificados: condução, convecção, radiação, equilíbrio e dilatação.');
