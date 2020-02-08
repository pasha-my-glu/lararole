(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{202:function(t,s,a){t.exports=a.p+"assets/img/erd.c020c387.png"},212:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),e("h2",{attrs:{id:"migrations"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#migrations"}},[t._v("#")]),t._v(" Migrations")]),t._v(" "),e("p",[t._v("Lararole provides role management db structure. Your application must migrate it before use it.")]),t._v(" "),e("ul",[e("li",[t._v("2019_11_17_000000_create_modules_table")]),t._v(" "),e("li",[t._v("2019_11_17_100000_create_roles_table")]),t._v(" "),e("li",[t._v("2019_11_17_200000_create_module_role_table")]),t._v(" "),e("li",[t._v("2019_11_17_300000_create_role_user_table")])]),t._v(" "),e("p",[t._v("To migrate these migrations.")]),t._v(" "),e("pre",[e("code",[t._v("php artisan migrate\n")])]),t._v(" "),e("h3",{attrs:{id:"er-diagram"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#er-diagram"}},[t._v("#")]),t._v(" ER Diagram")]),t._v(" "),e("p",[e("img",{attrs:{src:a(202),alt:"ER Diagram"}})]),t._v(" "),e("h2",{attrs:{id:"make-views"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#make-views"}},[t._v("#")]),t._v(" Make Views")]),t._v(" "),e("p",[t._v("To generate basic blade views with exact directory path run")]),t._v(" "),e("pre",[e("code",[t._v("php artisan make:views\n")])]),t._v(" "),e("p",[t._v("All the views will generate in specific folders with sequence of module and nested modules like this.")]),t._v(" "),e("h3",{attrs:{id:"views-directory-structure"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#views-directory-structure"}},[t._v("#")]),t._v(" Views Directory Structure")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("modules\n│\n└───Module\n│   │\n│   └───Child Module\n│       │   create.blade.php\n│       │   edit.blade.php\n│       │   index.blade.php\n│       │   show.blade.php\n│\n└───Module\n│   │\n│   └───Child Module\n│   │    │\n│   │    └───Child Module\n│   │        │   create.blade.php\n│   │        │   edit.blade.php\n│   │        │   index.blade.php\n│   │        │   show.blade.php\n│   │\n│   └───Child Module\n│       │   create.blade.php\n│       │   edit.blade.php\n│       │   index.blade.php\n│       │   show.blade.php\n│\n└───Module\n│   │   create.blade.php\n│   │   edit.blade.php\n│   │   index.blade.php\n│   │   show.blade.php\n")])])]),e("h2",{attrs:{id:"make-super-admin-role"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#make-super-admin-role"}},[t._v("#")]),t._v(" Make Super Admin Role")]),t._v(" "),e("p",[t._v("To create a super admin role which has every module write access.")]),t._v(" "),e("pre",[e("code",[t._v("php artisan make:super-admin-role\n")])]),t._v(" "),e("h2",{attrs:{id:"assign-super-admin-role-to-user"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#assign-super-admin-role-to-user"}},[t._v("#")]),t._v(" Assign Super Admin Role to User")]),t._v(" "),e("p",[t._v("To assign super admin role to any user by user id.")]),t._v(" "),e("pre",[e("code",[t._v("php artisan assign-super-admin-role --user={$id}\n")])]),t._v(" "),e("h2",{attrs:{id:"seeder"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#seeder"}},[t._v("#")]),t._v(" Seeder")]),t._v(" "),e("p",[t._v("For development generate dummy roles with some modules.\nCall LararoleSeeder in "),e("code",[t._v("DatabaseSeeder.php")]),t._v(" class.")]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\\"),e("span",{pre:!0,attrs:{class:"token package"}},[t._v("Lararole"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Database"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Seeds"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("LararoleSeeder")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("After seeder setup run")]),t._v(" "),e("pre",[e("code",[t._v("php artisan db:seed\n")])]),t._v(" "),e("h2",{attrs:{id:"routes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#routes"}},[t._v("#")]),t._v(" Routes")]),t._v(" "),e("p",[t._v("There are default 4 routes")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("module.index")]),t._v(" to show index page.")]),t._v(" "),e("li",[e("code",[t._v("module.create")]),t._v(" to show create page.")]),t._v(" "),e("li",[e("code",[t._v("module.show")]),t._v(" to show show page.")]),t._v(" "),e("li",[e("code",[t._v("module.edit")]),t._v(" to show edit page.")])]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[t._v("Route"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'module/{module_slug}'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Controller@index'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'module.index'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nRoute"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'module/{module_slug}/create'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Controller@create'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'module.create'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nRoute"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'module/{module_slug}/{module}'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Controller@show'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'module.show'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nRoute"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'module/{module_slug}/{module}/edit'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Controller@edit'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'module.edit'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h3",{attrs:{id:"how-to-use-routes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#how-to-use-routes"}},[t._v("#")]),t._v(" How to use routes?")]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("route")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'module.index'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$module")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("slug")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("route")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'module.create'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$module")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("slug")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("route")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'module.show'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$module")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("slug")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$product")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("id")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Here product is object of Product model. you have to send product id to this route. ")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("route")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'module.edit'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$module")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("slug")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$product")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("id")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// same here, id required of Any Model")]),t._v("\n")])])]),e("h4",{attrs:{id:"how-to-use-id"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#how-to-use-id"}},[t._v("#")]),t._v(" How to use id")]),t._v(" "),e("p",[t._v("In views folder "),e("code",[t._v("show.blade.php")]),t._v(" or "),e("code",[t._v("edit.blade.php")]),t._v(" controller will return back that "),e("code",[t._v("id")]),t._v(" back.")]),t._v(" "),e("h5",{attrs:{id:"example-of-use-id-in-blade"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example-of-use-id-in-blade"}},[t._v("#")]),t._v(" Example of use id in blade")]),t._v(" "),e("div",{staticClass:"language-blade extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('@section(\'content\')\n@php\n    $object = YourModel::find($id);\n@endphp\n\n{{--Example of use in edit.blade.php--}}\n<input type="text" name="name" value="{{ old(\'name\') ?? $object->name }}">\n@endsection\n')])])])])}),[],!1,null,null,null);s.default=n.exports}}]);