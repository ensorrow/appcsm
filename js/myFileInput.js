$(document).ready(function() {
    $('#imgUpload').fileinput({
        language: 'zh', //设置语言
        uploadUrl: 'uploadUrl', //上传的地址
        allowedFileExtensions: ['jpg', 'gif', 'png'],//接收的文件后缀
        showUpload: true, //是否显示上传按钮
        showCaption: false,//是否显示标题
        browseClass: "btn btn-primary", //按钮样式     
        //dropZoneEnabled: false,//是否显示拖拽区域
        //minImageWidth: 50, //图片的最小宽度
        //minImageHeight: 50,//图片的最小高度
        //maxImageWidth: 1000,//图片的最大宽度
        //maxImageHeight: 1000,//图片的最大高度
        //maxFileSize: 0,//单位为kb，如果为0表示不限制文件大小
        //minFileCount: 0,
        maxFileCount: 10, //表示允许同时上传的最大文件个数
        enctype: 'multipart/form-data',
        validateInitialCount:true,
        previewFileIcon: "<i class='glyphicon glyphicon-king'></i>",
        msgFilesTooMany: "选择上传的文件数量({n}) 超过允许的最大数值{m}！",
    });
    var tWra = $('#textInputWra');
    var imgWra = $('.file-preview-thumbnails');
    var subBtn = $('#subBtn');
    var empty = 1;
    function countImgs() {
        var num = 0;
        num = imgWra.children('div').length+1;
        return num;        
    }
    $('#imgUpload').on('change', function() {
        var n = countImgs();
        n ? empty = 0 : empty = 1;
        buttonControl();
        console.log(n);
        tWra.append('<div class="form-group"><label>输入图片'+n+'对应的url</label><input type="url" class="form-control"></div>')
    });
    $('#imgUpload').on('filecleared', function() {
        buttonControl(1);
        tWra.children('div').remove();
    });
    $('.kv-file-remove').on('click', function (){
        tWra.children('div').last().remove();
        console.log('hh')
    });
    function buttonControl(num) {
        empty = num || empty;
        if(!empty) {
            subBtn.removeClass('disabled');
        } else {
            subBtn.addClass('disabled');
        }
    }
})