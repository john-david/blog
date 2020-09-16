<template>
<footer class="fill-gray-lighter xs-text-6 md-text-5">
    <div class="r no-gap">

        <div class="c-12 xs-text-left xs-p2 xs-border">
            <div class="item xs-text-center">
                <div v-if="pagination" class="xs-flex xs-flex-justify-center xs-flex-align-center">
                    <span class="xs-absolute xs-l1 xs-text-6 text-gray-lighter xs-mr2 "> <span class="bold">&nbsp; {{ 1 + this.$store.state.gridOffset}} - {{this.pageCount}}</span> of {{this.$store.state.resultsnum}} </span>

                    <div class="pagination">

                        <nuxt-link :to="`?page=${prevpage}`" tag="button" :class="{ 'pagination__button--disabled': this.prevpage <= 0 }" class="pagination__button pagination__button--prev">
                            <svg class="pagination__button--prev-icon" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <path d="M368.619 16.892l24.485 24.449c2.938 2.934 4.897 7.335 4.897 11.246 0 3.912-1.959 8.313-4.897 11.246l-192.448 192.168 192.448 192.168c2.938 2.934 4.897 7.335 4.897 11.246 0 4.401-1.959 8.313-4.897 11.246l-24.485 24.449c-2.938 2.934-7.345 4.89-11.263 4.89s-8.325-1.956-11.263-4.89l-228.196-227.864c-2.938-2.934-4.897-7.335-4.897-11.246 0-3.912 1.959-8.313 4.897-11.246l228.196-227.864c2.938-2.934 7.345-4.89 11.263-4.89s8.325 1.956 11.263 4.89v.002z"/>
    </svg>
                        </nuxt-link>
                        <nuxt-link :to="`?page=${nextpage}`" no-prefetch tag="button" :class="{ 'pagination__button--disabled': this.queryParam >= this.totalpages }" class="pagination__button pagination__button--next">
                            <svg class="pagination__button--next-icon" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <path d="M142.382 16.892l-24.485 24.449c-2.938 2.934-4.897 7.335-4.897 11.246 0 3.912 1.959 8.313 4.897 11.246l192.448 192.168-192.448 192.168c-2.938 2.934-4.897 7.335-4.897 11.246 0 4.401 1.959 8.313 4.897 11.246l24.485 24.449c2.938 2.934 7.345 4.89 11.263 4.89s8.325-1.956 11.263-4.89l228.196-227.864c2.938-2.934 4.897-7.335 4.897-11.246 0-3.912-1.959-8.313-4.897-11.246l-228.196-227.864c-2.938-2.934-7.345-4.89-11.263-4.89s-8.325 1.956-11.263 4.89v.002z"/>
    </svg>
                        </nuxt-link>
                    </div>

                    <div></div>

                </div>
                <div v-else>&nbsp;</div>

            </div>

        </div>
        <div class="xs-text-left xs-p2 xs-border" :class="signupAboutSize">
            <div class="item">
                <div v-show="siteDescription" class="footer__heading xs-mb2">johndavid.org</div>
                <p v-show="siteDescription">{{siteDescription}}</p>
            </div>
        </div>
        <div v-if="signupBoolean" class="c-25 xs-text-left xs-p2 xs-border">
            <div v-if="!sent" class="item">
                <div class="footer__heading xs-mb2">Blog Updates Signup</div>
                <form @submit.prevent="processForm" action="/.netlify/functions/app" name="mailinglist">
                    <input type="email" v-model="emaildata.email" class="text-input text-input--small xs-mb1 xs-mr2" placeholder="you@email.com">
                    <button type="submit" class="button button--transparent button--small">Submit</button>
                </form>
            </div>
            <div class="item" v-else>
                <div class="xs-mb2">{{emaildata.email}} has been added to our newsletter.</div>

            </div>
        </div>
        <div class="xs-text-left xs-p2 xs-border" :class="signupAboutSize">
            <div class="item">
                <div v-show="connectData" class="footer__heading xs-mb2">Connect</div>
                <ul class="list-unstyled">
                    <li v-show="connectData" v-for="(c,i) in connectData" :key="i">
                        <a :href="c.url">{{c.name}}</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="xs-text-left xs-p2 xs-border" :class="signupAboutSize">
            <div class="item">
                <div class="footer__heading xs-mb2"> Data Science + Software Engineering </div>

<svg height="75" width="auto"
     version="1.1" 
     id="radar-circle-other"
     pointer-events="none">
				   
                    <circle cx="50%" cy="50%" r="0" fill-opacity="0" stroke="grey" stroke-width="16px" stroke-opacity="0.4">
					      <animate attributeName="r" from="0" to="1220" dur="5s" repeatCount="indefinite" begin="0.25s" />
				    </circle>
				  
				    <circle cx="50%" cy="50%" r="0" fill-opacity="0" stroke="grey" stroke-width="12px" stroke-opacity="0.4">
					      <animate attributeName="r" from="0" to="1220" dur="3s" repeatCount="indefinite" begin="1.25s" />
				    </circle>
				  
				    <circle cx="50%" cy="50%" r="0" fill-opacity="0" stroke="grey" stroke-width="8px" stroke-opacity="0.4">
					      <animate attributeName="r" from="0" to="1220" dur="6s" repeatCount="indefinite" begin="2.25s" />
				    </circle>
				  
				    <circle cx="50%" cy="50%" r="0" fill-opacity="0" stroke="grey" stroke-width="4px" stroke-opacity="0.4">
					      <animate attributeName="r" from="0" to="1220" dur="9s" repeatCount="indefinite" begin="3.25s" />
				    </circle>
				  
				    <circle cx="50%" cy="50%" r="0" fill-opacity="0" stroke="grey" stroke-width="2px" stroke-opacity="0.4">
					      <animate attributeName="r" from="0" to="1220" dur="6s" repeatCount="indefinite" begin="4.25s" />
				    </circle>
                    <defs>
                    <path id="double-wave"
                        fill="none"
                        stroke="black"
                        stroke-width="2px"
                        d="M0 50
                            C 40 10, 60 10, 100 50   
                            C 140 75, 160 75, 200 50
                            C 240 10, 260 10, 300 50 
                            C 340 75, 360 75, 400 50
                            C 440 10, 460 10, 500 50
                            C 540 75, 560 75, 600 50
                            C 640 10, 660 10, 700 50
                            L 700 100 L 0 100 Z"             
                    />
                    </defs>
                    <use xlink:href="#double-wave" x="0" y="0">
                    <animate attributeName="x" from="0" to="-200" dur="3s"
                            repeatCount="indefinite"/>
                    </use>
  
				</svg>


            </div>
        </div>
        <div class="c-12 xs-text-left xs-p2 xs-border">
            
            <!--
            <div class="item xs-text-6">
            </div>
            -->

        </div>
    </div>
</footer>
</template>

<script>

export default {
  
    props: ["pagination"],
    watchQuery: ['page'],
    data() {
        return {
            emaildata: {
                email: ""
            },
            sent: false,
        };
    },
    methods: {
        async processForm() {
            try {
                const sendgrid = await this.$axios.post(
                    `${process.env.API_URL}/.netlify/functions/app`,
                    this.emaildata
                );
                console.log("Processed!");
                this.sent = true;
            } catch (e) {
                console.log(e);
            }
        },
    },
    computed: {
        nextCheck() {
            if (this.nextpage > this.queryParam) {
                return true
            } else {
                return false
            }
        },
        pageCount() {
            var tp = (this.$store.state.gridNumPosts * 1) + (this.$store.state.gridOffset * 1)
            if (tp > this.$store.state.resultsnum) {
                return this.$store.state.resultsnum
            } else {
                return tp + 1
            }
        },
        signupAboutSize: function () {
            return {
                "c-25": this.signupBoolean,
                "c-4": !this.signupBoolean
            };
        },
        prevpage() {
            var prev = Number(this.queryParam) - 1;
            return prev;
        },
        totalpages() {
            var res = this.$store.state.resultsnum;
            var total = Math.ceil(res / 12);
            return total;
        },
        nextpage() {
            var next = Number(this.queryParam) + 1;
            return next;
        },
        queryParam() {
            if (this.$route.query.page == null) {
                return 1;
            } else {
                return Number(this.$route.query.page);
            }
        },
        connectData() {
            return this.$store.state.connect.connectlinks;
        },
        siteDescription() {
            return this.$store.state.siteInfo.sitedescription;
        },
        signupBoolean() {
            return this.$store.state.siteInfo.emailsignup;
        }
    }
};

</script>

<style scoped>

.text-input {
    max-width: 100%;
}

.footer__heading {
    max-width: 100%;
}

</style>




