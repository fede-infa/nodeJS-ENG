
Package manager
Tool to download and install libraries. In nodeJS we use NPM 

npm i -g libraryName (for global installation)
npm i libraryName (for local  installation)
npm i --save-dev libraryName (libraries used only for develop an app)

# Library versioning

 A.B.C {
     A: Major release
     B: Minor release
     C: Patch
 }

 1.6.3 {
     1: Is the Major Release
     6: Is the Minor Release
     3: Is the Patch 
 }

## Only patches (~)
 ~0.13.0
 On version 0.13.1 it wil be updated to 0.13.1
 On version 0.14.0 it won't be updated

## Patches & minor updates (^)
 ^0.13.0
 On version 0.13.1 it will be updated to 0.13.1
 On version 0.14.0 it will be updated to 0.14.0
 On version 1.0.0 it won't be updated

## All updates (*)
 *0.13.0
 On version 0.13.1 it will be updated to 0.13.1
 On version 0.14.0 it will be updated to 0.14.0
 On version 1.0.0 it will be updated to 1.0.0

## More symbols
 '>'   Download/Update any new version
 '>='  Download/Update any equal or new version
 '<='  Download/Update any old or equal version
 '<'   Download/Update any old version

## More options
 If there's no symbol, it will download only the version especified.
 If instead of write a version, it writes 'latest' it will always download the last version possible
 It's possible to combine symbols, for example: 1.0.0 || >= 1.1.0 < 1.2.0. In this case it will use 1.0.0 (if it finds it) or anyone from 1.1.0 to 1.1.X
