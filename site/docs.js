//steal('steal/generate',
//	'steal/get',
//	'steal/build',
//	'steal/build/pluginify',
//	'steal/coffee',
//	'steal/less',
//	'steal/clean',
//	'steal/parse',
//	'steal/html/crawl')
//.then('documentjs')
steal('can/construct',
	'can/construct/proxy',
	'can/control',
	'can/control/route',
	'can/control/plugin',
	'can/model',
	'can/observe',
	'can/observe/attributes',
	'can/observe/backup',
	'can/observe/delegate',
	'can/observe/validations',
	'can/route',
	'can/view/ejs',
	'can/util/fixture',
	'can/view/modifiers')
// .then('jquery/build/lib.js')
// .then('funcunit')
.then('./pages/init.js')
// .then('canui')