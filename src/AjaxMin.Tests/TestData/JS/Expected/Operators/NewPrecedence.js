﻿function test(oType){var arr=new Array(Array,Function,Boolean),foo=new arr[0](1,2,3);return new(Type.getType(oType.sObjectType))(oType.sTypeName,oType.iVersion,oType.sRootElementType,oType.sRootElementName)}function foo(){return new Date((new Date).ToUTCString())}var a=new new foo,b=new new foo(a),c=new(new foo)(a),d=new new foo(a)(b)