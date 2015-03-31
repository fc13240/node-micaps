var format = require('./libs/parser').format;

// var file_path = '../data/micaps_source/14/';
// // file_path = '../data/micaps_source/14/14110508.000';// 气压线
// // file_path = '../data/micaps_source/14/rr111308.024';
// file_path = '../data/micaps_source/14/rr111314.024';
// // file_path = '../data/micaps_source/14/rr112108.048';
// // file_path = '../data/micaps_source/14/rrr112708.006';
// file_path = '../data/micaps_source/14/kw14121808.024';
// file_path = '../data/micaps_source/14/wt121808.024';
// format(file_path,function(source_path){
// 	return source_path.replace('micaps_source','micaps')+'.json';
// });

var args = [].slice.call(process.argv);
//命令行进行指定文件压缩
if(args.length > 2){
	var fileIn = args[2];
	if(fileIn == '-local'){
		var file_path = '../data/micaps_source/14/';
		// file_path = '../data/micaps_source/14/14110508.000';
		// var file_path = '../data/micaps_source/3/';
		var file_path = '../data/micaps_source/3/15012114.000';
		var file_path = '../data/micaps_source/14/rr012608/rr012608.024';
		var file_path = '../data/micaps_source/14/rr012608/rr012608.048';
		var file_path = '../data/micaps_source/14/rr012608/rr012608.072';
		// var file_path = '../data/micaps_source/14/14110508.000';
		// var file_path = '../data/micaps_source/14/rr020908.024';
		// var file_path = '../data/micaps_source/3/15031208.024';
		// var file_path = '../data/micaps_source/1/15031214.000';
		// var file_path = '../data/micaps_source/8/15031220.024';
		// var file_path = '../data/micaps_source/14/special_2013100620.024';
		// var file_path = '../data/micaps_source/14/wt032708.024';//大风降温
		// var file_path = '../data/micaps_source/3/15012908.dat';//积雪深度
		// var file_path = '../data/micaps_source/14/rr033108.024';//降水预报
		format(file_path,function(source_path){
			return source_path.replace('micaps_source','micaps')+'.json';
		});
	}else{
		format(fileIn,function(source_path){
			return source_path.replace('data','data_stream')+'.json';
		});
	}
}