javascript: (() => {function checkAndImplementChanges(){if(3307==geofs.aircraft.instance.id&&(geofs.aircraft.instance.parts.elevatorleft.animations[0].ratio=10,geofs.aircraft.instance.parts.elevatorright.animations[0].ratio=10),52==geofs.aircraft.instance.id&&(geofs.aircraft.instance.definition.zeroRPMAltitude=8e4),21==geofs.aircraft.instance.id&&(geofs.aircraft.instance.parts.engine.thrust=7e3,geofs.aircraft.instance.definition.zeroRPMAltitude=8e4,geofs.aircraft.instance.definition.reverse=!0,geofs.aircraft.instance.definition.engineInertia=.75,geofs.aircraft.instance.parts.engine.thrust=7500,geofs.aircraft.instance.parts.engine.reverseThrust=4e3),12==geofs.aircraft.instance.id&&(geofs.aircraft.instance.parts.engine.thrust=12e3),7==geofs.aircraft.instance.id&&(geofs.aircraft.instance.engine.afterBurnerThrust=145e3,geofs.aircraft.instance.engine.thrust=77500),6==geofs.aircraft.instance.id&&(geofs.aircraft.instance.engines[0].thrust=6250,geofs.aircraft.instance.engines[1].thrust=6250),geofs.aircraft.instance.id=2){let n=0,t=0,s=0,r=0,f=0;function a(){t=3*-(n-geofs.animation.values.rpm),geofs.aircraft.instance.rigidBody.applyTorqueImpulse([e(t-s)[0],e(t-r)[1],e(t+f)[2]])}function e(a){var e=geofs.animation.values.heading360,i=e*(Math.PI/180),n=(e-360)*(Math.PI/180),t=geofs.animation.values.atilt;return fx=a*Math.cos(i),fy=a*Math.cos(n),fz=a*Math.sin(t*(Math.PI/180)),[fx,fy,fz]}function i(){n=geofs.animation.values.rpm,setTimeout(a,200)}setInterval(function(){geofs.animation.values.haglFeet<=10&&geofs.aircraft.instance.rigidBody.applyCentralImpulse([0,0,(10-geofs.animation.values.haglFeet)*geofs.animation.values.kias]),geofs.animation.values.aoa>10&&geofs.aircraft.instance.rigidBody.applyTorqueImpulse([e(Math.random()*geofs.animation.values.aoa*2)[0],e(Math.random()*geofs.animation.values.aoa*2)[1],0]),s=geofs.animation.values.rpm/10*geofs.animation.values.pitch,r=geofs.animation.values.rpm/10*geofs.animation.values.roll,f=geofs.animation.values.rpm/10*geofs.animation.values.yaw,i()},200)}1==geofs.aircraft.instance.id&&(geofs.aircraft.instance.parts.engine.thrust=2250,geofs.aircraft.instance.definition.zeroRPMAltitude=5e4,geofs.aircraft.instance.definition.Vspeeds.VNE=133,geofs.aircraft.instance.definition.Vspeeds.VNO=100)}var repeatChecks=setInterval(checkAndImplementChanges,1e3);function checkAircraftTypeAndSpeedAndImplementMachFX(){1!=geofs.aircraft.instance.id&&2!=geofs.aircraft.instance.id&&5!=geofs.aircraft.instance.id&&6!=geofs.aircraft.instance.id&&8!=geofs.aircraft.instance.id&&11!=geofs.aircraft.instance.id&&12!=geofs.aircraft.instance.id&&13!=geofs.aircraft.instance.id&&14!=geofs.aircraft.instance.id&&15!=geofs.aircraft.instance.id&&16!=geofs.aircraft.instance.id&&2310!=geofs.aircraft.instance.id&&2418!=geofs.aircraft.instance.id&&2420!=geofs.aircraft.instance.id&&2426!=geofs.aircraft.instance.id&&2461!=geofs.aircraft.instance.id&&2750!=geofs.aircraft.instance.id&&2752!=geofs.aircraft.instance.id&&2808!=geofs.aircraft.instance.id&&2864!=geofs.aircraft.instance.id&&2892!=geofs.aircraft.instance.id&&2943!=geofs.aircraft.instance.id&&2976!=geofs.aircraft.instance.id&&2989!=geofs.aircraft.instance.id&&3109!=geofs.aircraft.instance.id&&3289!=geofs.aircraft.instance.id&&3460!=geofs.aircraft.instance.id||(geofs.animation.values.mach>.675&&(geofs.preferences.weather.advanced.turbulences=7),geofs.animation.values.mach>.735?geofs.preferences.weather.advanced.turbulences=9:geofs.preferences.weather.advanced.turbulences=.2),3!=geofs.aircraft.instance.id&&4!=geofs.aircraft.instance.id&&10!=geofs.aircraft.instance.id&&236!=geofs.aircraft.instance.id&&237!=geofs.aircraft.instance.id&&238!=geofs.aircraft.instance.id&&239!=geofs.aircraft.instance.id&&2003!=geofs.aircraft.instance.id&&2395!=geofs.aircraft.instance.id&&2556!=geofs.aircraft.instance.id&&2700!=geofs.aircraft.instance.id&&2706!=geofs.aircraft.instance.id&&2769!=geofs.aircraft.instance.id&&2772!=geofs.aircraft.instance.id&&2788!=geofs.aircraft.instance.id&&2843!=geofs.aircraft.instance.id&&2865!=geofs.aircraft.instance.id&&2870!=geofs.aircraft.instance.id&&2871!=geofs.aircraft.instance.id&&2878!=geofs.aircraft.instance.id&&2879!=geofs.aircraft.instance.id&&2899!=geofs.aircraft.instance.id&&2951!=geofs.aircraft.instance.id&&2973!=geofs.aircraft.instance.id&&3011!=geofs.aircraft.instance.id&&3036!=geofs.aircraft.instance.id&&3054!=geofs.aircraft.instance.id&&3140!=geofs.aircraft.instance.id&&3179!=geofs.aircraft.instance.id&&3180!=geofs.aircraft.instance.id&&3292!=geofs.aircraft.instance.id&&3307!=geofs.aircraft.instance.id&&3341!=geofs.aircraft.instance.id&&3534!=geofs.aircraft.instance.id&&3575!=geofs.aircraft.instance.id||(geofs.animation.values.mach>.8&&(geofs.preferences.weather.advanced.turbulences=7),geofs.animation.values.mach>.9?geofs.preferences.weather.advanced.turbulences=9:geofs.preferences.weather.advanced.turbulences=.2)}repeatChecks=setInterval(checkAircraftTypeAndSpeedAndImplementMachFX,500);})();
