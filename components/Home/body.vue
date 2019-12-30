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
					<div class="col-xs-12 col-sm-4 col-md-4">
						<div class="feature-panel wow fadeInUp" data-wow-duration="1s">
							<div class="feature--icon">
								<i class="lnr lnr-bullhorn"></i>
							</div>
							<div class="feature--content">
								<h3>Start your campaign</h3>
								<p>Ebo impresses you with fully responsiveness and highly customization. We did it in combination of very clean and flexible design.</p>
							</div>
						</div>
					</div>
					<div class="col-xs-12 col-sm-4 col-md-4">
						<div class="feature-panel wow fadeInUp" data-wow-duration="1s">
							<div class="feature--icon">
								<i class="lnr lnr-user"></i>
							</div>
							<div class="feature--content">
								<h3>Engage new users</h3>
								<p>Ebo impresses you with fully responsiveness and highly customization. We did it in combination of very clean and flexible design.</p>
							</div>
						</div>
					</div>
					<div class="col-xs-12 col-sm-4 col-md-4">
						<div class="feature-panel wow fadeInUp" data-wow-duration="1s">
							<div class="feature--icon">
								<i class="lnr lnr-chart-bars"></i>
							</div>
							<div class="feature--content">
								<h3>Claim your reward</h3>
								<p>Ebo impresses you with fully responsiveness and highly customization. We did it in combination of very clean and flexible design.</p>
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
						<div class="feature-panel mb-50 wow fadeInUp" data-wow-duration="1s">
							<div class="feature--icon">
								<i class="lnr lnr-book"></i>
							</div>
							<div class="feature--content">
								<h3>10 Chapters</h3>
								<p>Lorem ipsum dolor sit amet, consive adipisicing elit, sed do eiusmod. tempor incididunt ut labore.</p>
							</div>
						</div>
						<div class="feature-panel wow fadeInUp" data-wow-duration="1s">
							<div class="feature--icon">
								<i class="lnr lnr-star"></i>
							</div>
							<div class="feature--content">
								<h3>Goodreads</h3>
								<p>Lorem ipsum dolor sit amet, consive adipisicing elit, sed do eiusmod. tempor incididunt ut labore.</p>
							</div>
						</div>
					</div>
					<div class="col-xs-12 col-sm-12 col-md-7 wow fadeInUp">
						<img class="img-responsive center-block" src="assets/images/mockup/ipad.jpg" alt="ipad"/>
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
								<img src="assets/images/background/bg-1.jpg" alt="Background"/>
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
							<div class="testimonial-panel wow fadeInUp" data-wow-duration="1s">
								<div class="testimonial-body">
									<div class="testimonial--body">
										<p>“If you have complex eBook creation and design trend.trust Ebo’s e-Book, He is knowledgeable!”</p>
									</div>
									<div class="testimonial--meta">
										<div class="testimonial--author">
											<img src="assets/images/testimonials/1.png" alt="author">
											<h5>Mark Smith</h5>
											<p>Art director</p>
										</div>
									</div>
								</div>
							</div>
							<div class="testimonial-panel wow fadeInUp" data-wow-duration="1s">
								<div class="testimonial-body">
									<div class="testimonial--body">
										<p>“If you have complex eBook creation and design trend.trust Ebo’s e-Book, He is knowledgeable!”</p>
									</div>
									<div class="testimonial--meta">
										<div class="testimonial--author">
											<img src="assets/images/testimonials/2.png" alt="author">
											<h5>Jessy Arthur</h5>
											<p>UX designer</p>
										</div>
									</div>
								</div>
							</div>
							<div class="testimonial-panel wow fadeInUp" data-wow-duration="1s">
								<div class="testimonial-body">
									<div class="testimonial--body">
										<p>“If you have complex eBook creation and design trend.trust Ebo’s e-Book, He is knowledgeable!”</p>
									</div>
									<div class="testimonial--meta">
										<div class="testimonial--author">
											<img src="assets/images/testimonials/1.png" alt="author">
											<h5>ayman fikry</h5>
											<p> web designer</p>
										</div>
									</div>
								</div>
							</div>
							<div class="testimonial-panel wow fadeInUp" data-wow-duration="1s">
								<div class="testimonial-body">
									<div class="testimonial--body">
										<p>“If you have complex eBook creation and design trend.trust Ebo’s e-Book, He is knowledgeable!”</p>
									</div>
									<div class="testimonial--meta">
										<div class="testimonial--author">
											<img src="assets/images/testimonials/2.png" alt="author">
											<h5>cone adresson</h5>
											<p>web developer</p>
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
					<div class=" col-xs-12 col-sm-4 col-md-4 price-table wow fadeInUp" data-wow-duration="1s">
						<div class="pricing-panel">
							<div class="pricing--heading text--center">
								<h4><i class="fa fa-file-text-o"></i></h4>
								<div class="pricing--heading">
									<p>0<span class="currency">$</span>
									</p>
									<div class="pricing--desc">
										E-book
									</div>
								</div>
							</div>
							<div class="pricing--body">
								<ul class="pricing--list list-unstyled">
									<li>Five Brand Monitors</li>
									<li>Five Keyword Monitors</li>
									<li>Basic Quota </li>
								</ul>
								<a class="btn btn--primary btn--rounded" href="/download">Get Started</a>
							</div>
						</div>
					</div>
					<div class=" col-xs-12 col-sm-4 col-md-4 price-table wow fadeInUp" data-wow-duration="1s">
						<div class="pricing-panel">
							<div class="pricing--heading text--center">
								<h4><i class="fa fa-file-pdf-o"></i></h4>
								<div class="pricing--heading">
									<p>5<span class="currency">$</span>
									</p>
									<div class="pricing--desc">
										Soft Copy
									</div>
								</div>
							</div>
							<div class="pricing--body">
								<ul class="pricing--list list-unstyled">
									<li>Five Brand Monitors</li>
									<li>Five Keyword Monitors</li>
									<li>Basic Quota </li>
								</ul>
								<a class="btn btn--primary btn--rounded" href="/download">Get Started Now</a>
							</div>
						</div>
					</div>
					<div class=" col-xs-12 col-sm-4 col-md-4 price-table wow fadeInUp" data-wow-duration="1s">
						<div class="pricing-panel">
							<!--  Pricing heading  -->
							<div class="pricing--heading text--center">
								<h4><i class="fa fa-book"></i></h4>
								<div class="pricing--heading">
									<p>12<span class="currency">$</span>
									</p>
									<div class="pricing--desc">
										Hard Copy
									</div>
								</div>
							</div>
							<!--  Pricing body  -->
							<div class="pricing--body">
								<ul class="pricing--list list-unstyled">
									<li>Five Brand Monitors</li>
									<li>Five Keyword Monitors</li>
									<li>Basic Quota </li>
								</ul>
								<a class="btn btn--primary btn--rounded" href="/download">Get Started</a>
							</div>
							<!--  Pricing Body  -->
						</div>
					</div>
					<!-- .pricing-table End -->
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
      urlHeader: BASE_URL + '/landingPageHeader',
      urlBody: BASE_URL + '/landingPageBody',
      title: null,
      description: null,
      imageBook: null,
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
      footer_description: null

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
            console.log('body content>>>',datos.body);

            this.title_feature = datos.body.title_feature;
            this.description_feature = datos.body.description_feature;
            this.title_chapters = datos.body.title_chapters;
            this.description_chapters = datos.body.description_chapters;
            this.title_about = datos.body.title_about;
            this.about_description = datos.body.about_description;
            this.title_testimonials = datos.body.title_testimonials;
            this.title_pricingplans = datos.body.title_pricingplans;
            this.description_pricingplans = datos.body.description_pricingplans;
            this.footer_title = datos.body.footer_title;
            this.footer_description = datos.body.footer_description;

          })
    }
  },
  mounted() {
    this.queryHeader();
    this.queryBody();

  },
}
</script>
