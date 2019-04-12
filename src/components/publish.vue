<template>
	<div class="publish">
		<router-link to="/index">
			<img src="../assets/goback.png" class="back_icon">
		</router-link>
		<p class="topTitle">发布</p>
<!-- 发布内容 -->
		<div class="publish_box">
			<input type="string" name="title" class="publish_title" v-model="title" placeholder="点击编辑作品标题">
			<div class="publish_coverImg">
		        <img src="../assets/addPic.png" class="public_icon">
		        <input type="file" @change="getCoverImg($event)" ref="inputer" multiple accept="image/png,image/jpeg,image/gif,image/jpg">
		        <p>添加图片</p>
                <img v-if="coverImg" class="preImg" :src="coverImg" >
			</div>
			<div class="publish_text">
				<textarea  placeholder="点击编辑作品介绍" v-model="describe"></textarea>
			</div>
			<div class="publish_choose">
				<mt-radio
				  title="作品类型"
				  v-model="label_value"
				  :options="options">
				</mt-radio>
			</div>
<!-- 正文 -->
			<p class="content_title">正文</p>
			<div class="publish_contentBox">
                <div v-for="(item,index) in items">
                    <div v-if="item.type=='img'" class="publish_img">
                        <img src="../assets/addPic.png" class="public_icon2">
                        <input type="file" @change="getImg($event,index)"  multiple accept="image/png,image/jpeg,image/gif,image/jpg">
                        <p>添加图片</p>
                        <img v-if="item.p_img" class="preImg" :src="item.p_img" >
                    </div>
                    <div v-else class="publish_describe">
                        <textarea  placeholder="点击编辑图片介绍" v-model="item.img_text"></textarea>
                    </div>
                </div>
			</div>
		</div>
<!-- 发布按钮 -->
		<div class="public_button_box">
			<div>
				<img src="../assets/addText.png" class="addText_icon"  @click="addText">
				<img src="../assets/addPic2.png" class="addPic_icon"  @click="addImg">
				<img src="../assets/back.png" class="del_icon" @click="del_box">
			</div>
			<div>
				<mt-button size="large" class="publish_btn" @click="toPublish">发布</mt-button>
				<!-- <mt-button type="primary">预览</mt-button> -->
			</div>
			
		</div>
	</div>
</template>
<script>
import { MessageBox } from 'mint-ui';
// import { constants } from 'fs';
import { Toast } from 'mint-ui';
	export default {
		data(){
			return{
                title:'',
                coverImg:'',
				describe:"",
                label_value:'',
				options:[
				  {
				    label: '摄影',
				    value: '摄影',
				  },
				  {
				    label: '绘画',
				    value: '绘画'
				  },
				  {
				    label: '写真',
				    value: '写真'
				  },
				  {
				  	label: '素描',
				    value: '素描'
				  },
				  {
				  	label: '油墨',
				    value: '油墨',
				  }
                ],
                items:[
                    {
                        type:"img",
                        p_img:''  
                    },
                    {
                        type:"text",
                        img_text:''
                    }
                ]
			}
		},
		mounted:function(){
			
		},
		methods:{
			getCoverImg:function($event){
                let inputDOM = this.$refs.inputer;
                console.log(inputDOM);
                let file=inputDOM.files[0];
                console.log(file);
                if(file){
                    this.coverImg=this.getObjectURL(file);
                }            
            },
            getObjectURL(file) {
                let url = null ;
                if (window.createObjectURL!=undefined) { // basic
                url = window.createObjectURL(file) ;
                } else if (window.URL!=undefined) { // mozilla(firefox)
                url = window.URL.createObjectURL(file) ;
                } else if (window.webkitURL!=undefined) { // webkit or chrome
                url = window.webkitURL.createObjectURL(file) ;
                }
                console.log(url);
                return url ;
            },
            getImg:function($event,index){
                let file2=$event.target.files[0];
                console.log(file2);
                if(file2){
                    this.items[index].p_img=this.getObjectURL(file2);
                }       
            },
			addText:function(){
                let obj={
                    type:'text',
                    img_text:''
                }
                this.items.push(obj);
			},
			addImg:function(){
                let obj={
                    type:'img',
                    p_img:''
                }
                this.items.push(obj);
            },
            del_box:function(){
                if(this.items.length>2){
                    this.items.pop();
                }else{
                    MessageBox('提示', '最少要有一张图片和一段文字');
                }
                
            },
            toPublish:function(){
                //获取当前日期
                let myDate=new Date();
                let timer=myDate.getFullYear()+'.'+(parseInt(myDate.getMonth())+1)+'.'+myDate.getDate();
                console.log(timer,this.label_value);
                let p_content=[];//正文的信息
                let publishDate={};//整篇文章的信息
                publishDate.author=this.$store.state.nowUser.userName;
                publishDate.publicTime=timer;
                publishDate.label=this.label_value;
                publishDate.title=this.title;
                publishDate.coverImg=this.coverImg;
                publishDate.describe=this.describe;
                publishDate.p_content=this.items;
                console.log(publishDate);
                this.$store.commit('addPage',publishDate); 
                this.$router.push('/index')
                Toast('发布成功');
            }

		}
	}
</script>
<style scoped lang="scss">
	@import "../style/publish.scss";
</style>



