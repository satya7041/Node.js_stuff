Here i am learning express.js with node.js. In addition i learned about versioning

suppose our node.js version is -> 4.21.1 then what does means?

 Ist part-> 4
 IInd part -> 21
 IIIrd part -> 1

explanation-> 
         IIIrd part -> it means minor fixes and they are optional to fix(fix like capital small some letter mistake etc), 
         and if you update then your version look from 4.21.1 to 4.21.2 like that.

         IInd part -> it means recommended bug fixes(like- some security related or important bug fix), after update your version
         look from 4.21.1 to 4.22.0 like that.

         IIIrd part -> it means major release(or say major/breaking update).
         Note-> don't use if you are working on existing project,because highly chances that it will break your
          code or occur any issue to run your code.
          if you are building project from scratch then you can install it.
          if you install it then your version looks from 4.21.1 to 5.0.0 like that

 if you want to install specific version then write->  npm install express@4.21.1 or your version

 symbols meaning-- 
 1. carrot symbol-> ^
 in your node.js version looks  ^4.21.1, here ^ means carrot symbol and 
 it means it will auto update the versions which comes between current version(4.21.1 to 5.0.0) means less that 5.0.0(updates 4.21.1 > 5.0.0)

2. tilde symbol-> ~
 in your node.js version looks  ~4.21.1, here ~ means tilde symbol and 
 it means it will auto update the recommended versions which comes between current version(4.21.1 to 4.21.9) 
 like- version    status
       ~4.21.1    update
       ~4.21.2    update
       ~4.21.3    update
       ~4.21.4    update
       ~4.22.4    will not update


