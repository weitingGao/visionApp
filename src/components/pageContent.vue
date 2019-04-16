<template>
	<div class="pageContent">
		<router-link to="/index">
			<img src="../assets/goback.png" class="back_icon">
		</router-link>
		<div class="coverImg" :style="{backgroundImage:'url(' + coverImg + ')'}" >
			<p class="mask"></p>
			<div class="title_box">
				<div class="label">{{label}}</div>
				<div class="p_title">{{title}}</div>
			</div>
			<div class="author_box">
				<img src="../assets/headicon2.jpg" class="headicon">
				<div>@{{author}} | {{publicTime}}</div>
			</div>
		</div>
		<div class="contentBox">
			<div v-for="content in contents">
				<div v-if="content.type=='img'" class="img_box">
					<img :src="content.p_img" class="content_img">
				</div>
				<div v-else class="text_box">
					<div>{{content.img_text}}</div>
				</div>
			</div>
		</div>
		
		<div class="control_box">
			<div class="like_box">
				<img src="../assets/like.png" class="like_icon">
				<span>33</span>
			</div>
			<div class="comment_box">
				<img src="../assets/message.png" class="comment_icon">
				<span>33</span>
			</div>
			<div class="view_box">
				<img src="../assets/icon01.png" class="view_icon">
				<span>333</span>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return{
				nowPage:'pageContent',
				coverImg:require("../assets/cs07.jpg"),
				author:'kosen',
				publicTime:'2019.4.10',
				title:'新手上路学摄影的第一天',
				label:'摄影',
				contents:[
					{
						p_img:require("../assets/cs03.jpg"),
						type:"img"
					},
					{
						p_img:require("../assets/cs01.jpg"),
						type:"img"
					},
					{
						img_text:"dsuhfkldsj会计法撒旦是的罚款",
						type:"text"
					},
					{
						p_img:require("../assets/cs02.jpg"),
						type:"img"
					},
					{
						img_text:"dsuhfkldsj会计法撒旦是的罚款",
						type:"text"
					},
					{
						p_img:require("../assets/cs04.jpg"),
						type:"img"
					},
				]
			}
		},
		mounted:function(){
			let p_id=this.$route.query.p_id;
			let newPublishFind=this.$store.state.publishFind.reverse();
			if(newPublishFind.length>0&&p_id<newPublishFind.length){
				this.coverImg=newPublishFind[p_id].coverImg;
				this.author=newPublishFind[p_id].author;
				this.publicTime=newPublishFind[p_id].publicTime;
				this.title=newPublishFind[p_id].title;
				this.label=newPublishFind[p_id].label;
				this.contents=newPublishFind[p_id].p_content;
			}
		},
		methods:{
			

		}
	}
</script>
<style scoped lang="scss">

 @import "../style/pageContent.scss";
</style>