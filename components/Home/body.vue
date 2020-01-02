<template>
  <div>
    	<section id="slider" class="section slider slider-2">
			<div class="slide--item">
				<div class="bg-ytvideo bg-overlay bg-overlay-dark" data-vid-id="ZKEaypYJbb4"></div>
				<div class="container">
					<div class="row">
						<div class="col-xs-12 col-sm-12 col-md-12">
							<div class="slide--logo mt-100 hidden-xs wow fadeInUp" data-wow-duration="1s">
								<img :src="logo" alt="logo hero">
							</div>
						</div>
					</div>
					<div class="row row-content">
						<div class="col-xs-12 col-sm-5 col-md-5 wow fadeInUp" data-wow-duration="1s">
							<div class="slide--holder">
								<img class="img-responsive" :src="imageBook" alt="screens">
							</div>
						</div>
						<div class="col-xs-12 col-sm-6 col-sm-offset-1 col-md-6 col-md-offset-1 pt-100 wow fadeInUp" data-wow-duration="1s">
							<div class="slide--headline">{{title}}</div>
							<div class="slide--bio">{{description}}</div>
							<div class="slide--action">
								<a class="btn btn--primary btn--rounded" style="font-size:15px;" href="/download">buy</a>
                <a class="btn btn--primary btn--rounded" style="font-size:15px;" href="/pageDownload">Download</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<div class="clearfix bg-white"></div>
		<section id="feature2" class="section feature feature-2 text-center bg-white">
			<div class="container">
				<div class="row clearfix">
					<div class="col-xs-12 col-sm-12 col-md-6 col-md-offset-3">
						<div class="heading heading-1 mb-70 text--center wow fadeInUp" data-wow-duration="1s">
							<h2 class="heading--title">{{title_feature}}</h2>
							<p class="heading--desc">{{description_feature}}</p>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-xs-12 col-sm-4 col-md-4" v-for="(camp, index) in campaign" :key="index" >
						<div class="feature-panel wow fadeInUp" data-wow-duration="1s">
							<div class="feature--icon">
								<i :class="camp.icon"></i>
							</div>
							<div class="feature--content">
								<h3>{{camp.title}}</h3>
								<p>{{camp.description}}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section class="pt-0 pb-0 bg-white">
			<div class="container">
				<div class="row">
					<div class="col-xs-12 col-sm-12 col-md-12">
						<hr class="feature-divider">
					</div>
				</div>
			</div>
		</section>
		<section id="feature2" class="section feature feature-2 feature-left bg-white">
			<div class="container">
				<div class="row">
					<div class="col-xs-12 col-sm-12 col-md-5">
						<div class="heading heading-1 mb-60 wow fadeInUp" data-wow-duration="1s">
							<h2 class="heading--title pt-20">{{title_chapters}}</h2>
							<p class="heading--desc pl-0">{{description_chapters}}</p>
						</div>
						<div class="feature-panel mb-50 wow fadeInUp" v-for="(chapter, index) in chapters" :key="index" data-wow-duration="1s">
							<div class="feature--icon">
								<i :class="chapter.icon"></i>
							</div>
							<div class="feature--content">
								<h3>{{chapter.title_content}}</h3>
								<p>{{chapter.title_description}}</p>
							</div>
						</div>
					</div>
					<div class="col-xs-12 col-sm-12 col-md-7 wow fadeInUp">
						<img class="img-responsive center-block" :src="url+image_chapter" alt="ipad"/>
					</div>
				</div>
			</div>
		</section>
		<section id="banner" class="section banner pt-0 pb-0">
			<div class="container-fluid">
				<div class="row">
					<div class="col-xs-12 col-sm-12 col-md-6 pr-0 pl-0">
						<div class="col-img">
							<div class="bg-section">
								<img :src="url+about_image" alt="Background"/>
							</div>
						</div>
					</div>
					<div class="col-xs-12 col-sm-12 col-md-6 col-content pl-100">
						<h3>{{title_about}}</h3>
						<p>{{about_description}}</p>
						<img src="assets/images/mockup/signture.png" alt="signture">
					</div>
				</div>
			</div>
		</section>
		<section id="reviews" class="section reviews bg-white">
			<div class="container">
				<div class="row clearfix">
					<div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
						<div class="heading heading-1 mb-80 text--center wow fadeInUp" data-wow-duration="1s">
							<h2 class="heading--title">{{title_testimonials}}</h2>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-xs-12 col-sm-12 col-md-12">
						<div class="carousel " data-slide="2" data-slide-res="1" data-autoplay="true" data-nav="false" data-dots="false" data-space="30" data-loop="true" data-speed="800">
							<div class="testimonial-panel wow fadeInUp" v-for="(test, index) in testimonial" :key="index" data-wow-duration="1s">
								<div class="testimonial-body">
									<div class="testimonial--body">
										<p>“{{test.description_testimonials}}”</p>
									</div>
									<div class="testimonial--meta">
										<div class="testimonial--author">
											<img :src='url+test.image_testimonial.url' alt="author">
											<h5>{{test.title_testimonial_person}}</h5>

											<p>{{test.description_testimonial_person}}</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
      </div>
		</section>
		<section id="pricing" class="section pricing pricing-1 bg-gray">
			<div class="container">
				<div class="row clearfix">
					<div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
						<div class="heading heading-1 mb-80 text--center wow fadeInUp" data-wow-duration="1s">
							<h2 class="heading--title">{{title_pricingplans}}</h2>
							<p class="heading--desc">{{description_pricingplans}}</p>
						</div>
					</div>
				</div>
				<div class="row">
					<div class=" col-xs-12 col-sm-4 col-md-4 price-table wow fadeInUp" v-for="(plan, index) in plans" :key="index" data-wow-duration="1s">
						<div class="pricing-panel">
							<div class="pricing--heading text--center">
								<h4><i :class="plan.icon"></i></h4>
								<div class="pricing--heading">
									<p>{{plan.price}}<span class="currency">$</span>
									</p>
									<div class="pricing--desc">
										{{plan.description_price}}
									</div>
								</div>
							</div>
							<div class="pricing--body">
								<ul class="pricing--list list-unstyled">
									<li>{{plan.description_benefits}}</li>
								</ul>
								<a class="btn btn--primary btn--rounded" href="/download">Get Started</a>
							</div>
						</div>
					</div>
				</div>
				<!-- .row end -->
			</div>
			<!-- .container end -->
		</section>
		<section id="cta" class="section cta text-center pb-0 bg-dark">
			<div class="container">
				<div class="row">
					<div class="col-xs-12 col-sm-12 col-md-6 col-md-offset-3 mb-100 wow fadeInUp" data-wow-duration="1s">
						<h3>{{footer_title}}</h3>
						<p>{{footer_description}}</p>
						<a class="btn btn--primary btn--rounded" href="/download">download</a>
					</div>
					<!-- .col-md-12 end -->
				</div>
				<!-- .row end -->
			</div>
			<!-- .container end -->
		</section>
  </div>
</template>

<script>
import { BASE_URL } from '../../utils/endspoint';
import axios from 'axios';
export default {
data () {
    return {
      url: BASE_URL,
      urlHeader: BASE_URL + '/landingPageHeader',
      urlBody: BASE_URL + '/landingPageBody',
      title: null,
      description: null,
      imageBook: null,
      image_chapter: null,
      about_image: null,
      logo: null,
      title_feature: null,
      description_feature: null,
      title_chapters: null,
      description_chapters: null,
      title_about: null,
      about_description: null,
      title_testimonials: null,
      title_pricingplans: null,
      description_pricingplans: null,
      footer_title: null,
      footer_description: null,
      campaign: [],
      chapters: [],
      testimonial: [],
      plans: []
    }
  },
  methods: {
    queryHeader(){
      let urlHeader=this.urlHeader;
        fetch(urlHeader)
          .then((response)=> {
            return response.json();
          })
          .then((datos)=>{
            this.title =  datos.header.title;
            this.description = datos.header.description;
            this.imageBook =BASE_URL+datos.header.imageBook[0].url
            this.logo = BASE_URL+datos.header.logo.url;
          })
    }, queryBody(){
      let urlBody=this.urlBody;
        fetch(urlBody)
          .then((response)=> {
            return response.json();
          })
          .then((datos)=>{
            // console.log('body content>>>',datos.data.body.image_chapters.url);

            this.title_feature = datos.data.body.title_feature;
            this.description_feature = datos.data.body.description_feature;
            this.title_chapters = datos.data.body.title_chapters;
            this.description_chapters = datos.data.body.description_chapters;
            this.title_about = datos.data.body.title_about;
            this.about_description = datos.data.body.about_description;
            this.title_testimonials = datos.data.body.title_testimonials;
            this.title_pricingplans = datos.data.body.title_pricingplans;
            this.description_pricingplans = datos.data.body.description_pricingplans;
            this.footer_title = datos.data.body.footer_title;
            this.footer_description = datos.data.body.footer_description;
            this.campaign = datos.data.campaign.campaigns;
            this.chapters = datos.data.chapters.chapters_contents;
            this.plans = datos.data.plans.pricing_plans;
            this.testimonial = datos.data.testimonial.testimonials;
            this.image_chapter = datos.data.body.image_chapters.url;
            this.about_image = datos.data.body.about_image.url;
          })
    }
  },
  mounted() {
    this.queryHeader();
    this.queryBody();

  },
}
</script>
