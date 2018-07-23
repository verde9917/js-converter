var converter = new Vue({
    el:'#converter',
    data:{
        inputtext:"",
        outputtext:""
    },
    methods:{
        convert: function () {
            var str = this.inputtext.replace(/\r?\n/g, '\\n');
            str = str.replace(/\r?"/g, '\\"');
            this.outputtext = str;
        }
    }
});
