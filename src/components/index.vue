<template>
	<div class="index_page">
		<header-box v-bind:nowPage="nowPage"></header-box>
		<div class="nav">
			<ul>
				<li  :class="active=='find'? 'nav_btn_on':''"  @click="active = 'find'">发现</li>
				<li  :class="active=='follow'? 'nav_btn_on':''"@click="active = 'follow'">关注</li>
				<li class="nav_btn_last" :class="active=='inspiration'? 'nav_btn_on':''"  @click="active = 'inspiration'">灵感</li>
			</ul>
			
		</div>

		<div class="page-tab-containe">
			<mt-tab-container v-model="active" swipeable>
				<mt-tab-container-item id="find">
					<div class="tab-box">
						<ul>
							<li v-for="(findContain,index) in findContains" @click="read(index)">
								<div class="cts">
									<div class="pic_box" v-bind:style="{backgroundImage:'url(' + findContain.img_cover + ')'}">
										<div class="label">{{findContain.label}}</div>
										<div class="find_authod">
											<p>by  {{findContain.username}} | {{findContain.publicTime}}</p>
										</div>
									</div>
									<div class="info_box">
										<p class="title"> {{findContain.p_title}}</p>
										<div class="subTitle">{{findContain.p_describe}}</div>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</mt-tab-container-item>
				<mt-tab-container-item id="follow">
					<div class="tab-box">
						<ul>
							<li v-for="(followContain,index) in followContains" @click="read(index)">
								<div class="cts">
									<div class="pic_box" v-bind:style="{backgroundImage:'url(' + followContain.img_cover + ')'}">
										<div class="label">{{followContain.label}}</div>
										<div class="find_authod">
											<p>by  {{followContain.username}} | {{followContain.publicTime}}</p>
										</div>
									</div>
									<div class="info_box">
										<p class="title"> {{followContain.p_title}}</p>
										<div class="subTitle">{{followContain.p_describe}}</div>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</mt-tab-container-item>
				<mt-tab-container-item id="inspiration">
					<div class="tab-box">
						<ul>
							<li v-for="(inspirationContain,index) in inspirationContains" @click="read(index)">
								<div class="cts">
									<div class="pic_box" v-bind:style="{backgroundImage:'url(' + inspirationContain.img_cover + ')'}">
										<div class="label">{{inspirationContain.label}}</div>
										<div class="find_authod">
											<p>by  {{inspirationContain.username}} | {{inspirationContain.publicTime}}</p>
										</div>
									</div>
									<div class="info_box">
										<p class="title"> {{inspirationContain.p_title}}</p>
										<div class="subTitle">{{inspirationContain.p_describe}}</div>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</mt-tab-container-item>
			</mt-tab-container>
		</div>

	</div>
</template>
<script>
import { TabContainer, TabContainerItem } from 'mint-ui';
	export default {
		data(){
			return{
				nowPage:'find',
				active: 'find',
				findContains:[
					{
						username:'kosen',
						label:'摄影',
						publicTime:'2019.3.13',
						img_cover:require('../assets/cs01.jpg'),
						p_title:'YOU are My girl',
						p_describe:'yes , you see i now your name '
					},
					{
						username:'高伟廷',
						label:'绘画',
						publicTime:'2019.3.13',
						img_cover:require('../assets/cs02.jpg'),
						p_title:'YOU are My girl',
						p_describe:'yes , you see i now your name '
					},
					{
						username:'高伟廷',
						label:'摄影',
						publicTime:'2019.3.13',
						img_cover:require('../assets/cs03.jpg'),
						p_title:'YOU are My girl',
						p_describe:'yes , you see i now your name '
					},
					{
						username:'高伟廷',
						label:'油画',
						publicTime:'2019.3.13',
						img_cover:require('../assets/cs04.jpg'),
						p_title:'YOU are My girl',
						p_describe:'yes , you see i now your name '
					},

				],
				followContains:[
					{
						username:'kosen',
						label:'摄影',
						publicTime:'2019.3.13',
						img_cover:require('../assets/cs07.jpg'),
						p_title:'YOU are My girl',
						p_describe:'yes , you see i now your name '
					},
					{
						username:'高伟廷',
						label:'绘画',
						publicTime:'2019.3.13',
						img_cover:require('../assets/cs03.jpg'),
						p_title:'YOU are My girl',
						p_describe:'yes , you see i now your name '
					},
					{
						username:'高伟廷',
						label:'摄影',
						publicTime:'2019.3.13',
						img_cover:require('../assets/cs03.jpg'),
						p_title:'YOU are My girl',
						p_describe:'yes , you see i now your name '
					},
					{
						username:'高伟廷',
						label:'油画',
						publicTime:'2019.3.13',
						img_cover:require('../assets/cs04.jpg'),
						p_title:'YOU are My girl',
						p_describe:'yes , you see i now your name '
					},

				],
				inspirationContains:[
					{
						username:'kosen',
						label:'摄影',
						publicTime:'2019.3.13',
						img_cover:require('../assets/cs04.jpg'),
						p_title:'YOU are My girl',
						p_describe:'yes , you see i now your name '
					},
					{
						username:'高伟廷',
						label:'绘画',
						publicTime:'2019.3.13',
						img_cover:require('../assets/cs02.jpg'),
						p_title:'YOU are My girl',
						p_describe:'yes , you see i now your name '
					},
					{
						username:'高伟廷',
						label:'摄影',
						publicTime:'2019.3.13',
						img_cover:require('../assets/cs07.jpg'),
						p_title:'YOU are My girl',
						p_describe:'yes , you see i now your name '
					},
					{
						username:'高伟廷',
						label:'油画',
						publicTime:'2019.3.13',
						img_cover:require('../assets/cs04.jpg'),
						p_title:'YOU are My girl',
						p_describe:'yes , you see i now your name '
					},

				],
			}
		},
		mounted:function(){
			window.scrollTo(0,0);
		},
		watch:{
			active(){
				window.scrollTo(0,0);
			}
		},
		methods:{
			read:function(i){
				console.log(i);
				this.$router.push('/pageContent')
			}

		}
	}
</script>
<style scoped lang="scss">
	@import "../style/index.scss";
</style>




