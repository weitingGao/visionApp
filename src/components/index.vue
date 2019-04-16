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
									<div class="pic_box" v-bind:style="{backgroundImage:'url(' + findContain.coverImg + ')'}">
										<div class="label">{{findContain.label}}</div>
										<div class="find_authod">
											<p>by  {{findContain.author}} | {{findContain.publicTime}}</p>
										</div>
									</div>
									<div class="info_box">
										<p class="title"> {{findContain.title}}</p>
										<div class="subTitle">{{findContain.describe}}</div>
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
									<div class="pic_box" v-bind:style="{backgroundImage:'url(' + followContain.coverImg + ')'}">
										<div class="label">{{followContain.label}}</div>
										<div class="find_authod">
											<p>by  {{followContain.author}} | {{followContain.publicTime}}</p>
										</div>
									</div>
									<div class="info_box">
										<p class="title"> {{followContain.title}}</p>
										<div class="subTitle">{{followContain.describe}}</div>
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
									<div class="pic_box" v-bind:style="{backgroundImage:'url(' + inspirationContain.coverImg + ')'}">
										<div class="label">{{inspirationContain.label}}</div>
										<div class="find_authod">
											<p>by  {{inspirationContain.author}} | {{inspirationContain.publicTime}}</p>
										</div>
									</div>
									<div class="info_box">
										<p class="title"> {{inspirationContain.title}}</p>
										<div class="subTitle">{{inspirationContain.describe}}</div>
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
import { constants } from 'fs';
	export default {
		data(){
			return{
				nowPage:'find',
				active: 'find',
				findContains:[
					{
						author:'kosen',
						label:'摄影',
						publicTime:'2019.3.13',
						coverImg:require('../assets/cs01.jpg'),
						title:'YOU are My girl',
						describe:'yes , you see i now your name '
					},
					{
						author:'高伟廷',
						label:'绘画',
						publicTime:'2019.3.13',
						coverImg:require('../assets/cs02.jpg'),
						title:'YOU are My girl',
						describe:'yes , you see i now your name '
					},
					{
						author:'高伟廷',
						label:'摄影',
						publicTime:'2019.3.13',
						coverImg:require('../assets/cs03.jpg'),
						title:'YOU are My girl',
						describe:'yes , you see i now your name '
					},
					{
						author:'高伟廷',
						label:'油画',
						publicTime:'2019.3.13',
						coverImg:require('../assets/cs04.jpg'),
						title:'YOU are My girl',
						describe:'yes , you see i now your name '
					},

				],
				followContains:[
					{
						author:'kosen',
						label:'摄影',
						publicTime:'2019.3.13',
						coverImg:require('../assets/cs07.jpg'),
						title:'YOU are My girl',
						describe:'yes , you see i now your name '
					},
					{
						author:'高伟廷',
						label:'绘画',
						publicTime:'2019.3.13',
						coverImg:require('../assets/cs03.jpg'),
						title:'YOU are My girl',
						describe:'yes , you see i now your name '
					},
					{
						author:'高伟廷',
						label:'摄影',
						publicTime:'2019.3.13',
						coverImg:require('../assets/cs03.jpg'),
						title:'YOU are My girl',
						describe:'yes , you see i now your name '
					},
					{
						author:'高伟廷',
						label:'油画',
						publicTime:'2019.3.13',
						coverImg:require('../assets/cs04.jpg'),
						title:'YOU are My girl',
						describe:'yes , you see i now your name '
					},

				],
				inspirationContains:[
					{
						author:'kosen',
						label:'摄影',
						publicTime:'2019.3.13',
						coverImg:require('../assets/cs04.jpg'),
						title:'YOU are My girl',
						describe:'yes , you see i now your name '
					},
					{
						author:'高伟廷',
						label:'绘画',
						publicTime:'2019.3.13',
						coverImg:require('../assets/cs02.jpg'),
						title:'YOU are My girl',
						describe:'yes , you see i now your name '
					},
					{
						author:'高伟廷',
						label:'摄影',
						publicTime:'2019.3.13',
						coverImg:require('../assets/cs07.jpg'),
						title:'YOU are My girl',
						describe:'yes , you see i now your name '
					},
					{
						author:'高伟廷',
						label:'油画',
						publicTime:'2019.3.13',
						coverImg:require('../assets/cs04.jpg'),
						title:'YOU are My girl',
						describe:'yes , you see i now your name '
					},

				],
			}
		},
		created:function(){
			if(this.$store.state.publishFind.length>0){
				// console.log('有料');
				this.findContains=this.findContains.concat(this.$store.state.publishFind).reverse();
				console.log(this.findContains)
			}
		},
		
		methods:{
			read:function(i){
				console.log(i);
				// this.$router.push('/pageContent')
				this.$router.push({path:'pageContent',query:{p_id:i}})
			}

		}
	}
</script>
<style scoped lang="scss">
	@import "../style/index.scss";
</style>




