<template>
  <div class="q-pa-md">
    <q-carousel
      swipeable
      navigation
      animated
      v-model="slide"
      v-model:fullscreen="fullscreen"
      infinite
    >
      <q-carousel-slide :name="1" img-src="~assets/2.png">
        <div class="slide1">
          <div class="image-logo">
            <img src="~assets/PCA_logo.png" alt="" width="200" />
          </div>
          <!-- <div class="slide1-title text-center">

          <h1 class="text-weight-bold">PCA Club</h1>
          </div>-->
          <div class="block bg-white shadow-1 q-pa-md">
            <h2 class="text-center">VIRTUAL PROPERTY MANAGEMENT</h2>
            <p class="text-center">
              Our portal allows you to manage your property right from the
              comfort of your home.
            </p>
          </div>
          <div class="bottom text-center absolute-bottom">
            <p class="bg-white shadow-1">
              <q-btn-toggle
                class="text-teal"
                flat
                v-model="slide"
                :options="[{ label: 'Login', value: '3' }]"
              />
            </p>
          </div>
          <div class="bottom-under absolute-bottom">
            <p>
              For more <span class="text-teal">info</span> visit the
              <span class="text-teal">Desktop version.</span
              ><span>&nbsp;<q-icon color="teal" name="desktop_windows" /></span>
            </p>
          </div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" img-src="~assets/3.png">
        <div class="slide2">
          <div class="image-logo">
            <img src="~assets/PCA_logo.png" alt="" width="200" />
          </div>
          <!-- <div class="slide1-title text-center">
          <h1 class="text-weight-bold">PCA Club</h1>
          </div>-->
          <div class="block bg-white shadow-1 q-pa-md">
            <p class="text-center">
              We also provide 24/7 emergency maintenance option for all of your
              tenant requests.
            </p>
          </div>
          <div class="bottom text-center absolute-bottom">
            <p class="bg-white shadow-1">
              Don't have a account?
              <a href="https://pcaclub.com/home-community/"
                ><span class="text-teal">Register now.</span></a
              >
            </p>
          </div>
          <div class="bottom-under absolute-bottom">
            <p>
              For more <span class="text-teal">info</span> visit the
              <span class="text-teal">Desktop version.</span
              ><span>&nbsp;<q-icon color="teal" name="desktop_windows" /></span>
            </p>
          </div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="3" img-src="~assets/4.png">
        <div class="slide3">
          <div class="image-logo">
            <img src="~assets/PCA_logo.png" alt="" width="200" />
          </div>
          <!-- <div class="slide1-title text-center">
          <h1 class="text-weight-bold">PCA Club</h1>
          </div>-->
          <div class="block bg-white shadow-1 q-pa-md">
            <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
              <q-input
                rounded
                outlined
                v-model="name"
                label="Enter your email address *"
                lazy-rules
                :rules="[
                  (val) => (val && val.length > 0) || 'Please type something',
                ]"
              />

              <div>
                <q-btn
                  outline
                  unelevated
                  rounded
                  label="Login"
                  type="submit"
                  color="gray"
                  class="text-black"
                  style="width: 100%; padding-top: 1em; padding-bottom: 1em"
                  to="/pcadashboard"
                />
              </div>
            </q-form>
          </div>
          <div class="bottom text-center absolute-bottom">
            <p class="bg-white shadow-1">
              Don't have a account?
              <a href="https://pcaclub.com/home-community/"
                ><span class="text-teal">Register now.</span></a
              >
            </p>
          </div>
          <div class="bottom-under absolute-bottom">
            <p>
              For more <span class="text-teal">info</span> visit the
              <span class="text-teal">Desktop version.</span
              ><span>&nbsp;<q-icon color="teal" name="desktop_windows" /></span>
            </p>
          </div>
        </div>
      </q-carousel-slide>

      <template v-slot:control>
        <q-carousel-control position="bottom-right" :offset="[18, 18]">
        </q-carousel-control>
      </template>
    </q-carousel>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      slide: ref(1),
      fullscreen: ref(true),
    };
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Spline+Sans+Mono:wght@300;400;500;600;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Fascinate&display=swap");

/*.slide1-title :is(h1,h2){
  font-family: 'Spline Sans Mono', monospace;

}*/
.slide1-title h1 {
  // font-family: 'Fascinate', cursive;
}
.slide1-title h2 {
  font-family: "Spline Sans Mono", monospace;
}
.slide1-title h1 {
  font-size: 2em;
  text-transform: uppercase;
}
.block {
  border-radius: 2em;
}

.block h2 {
  font-size: 1em;
}

.bottom {
  margin-bottom: 3em;
}

.bottom-under.absolute-bottom {
  font-size: 12px;
  /* margin-block-start: ; */
  margin-bottom: -1em;
  margin-left: 5px;
}

.slide2 .block {
  margin-top: 9em;
}

.q-carousel__slide {
  background-repeat: no-repeat;
  background-size: contain;
  background-position: bottom;
}

/*.q-carousel__control.q-carousel__navigation.no-wrap.absolute.flex.q-carousel__navigation--buttons.q-carousel__navigation--bottom {
	color: gray;
}*/
.q-icon.notranslate.material-icons {
  color: #009688;
}

.q-field--error .q-field__bottom {
  color: #009688;
}

.text-negative {
  color: #009688;
}

.image-logo {
  display: flex;
  justify-content: center;
}
</style>
