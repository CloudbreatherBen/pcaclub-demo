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
            <h2 class="text-center">Dashboard</h2>

            <q-table
              title="Current Plan Info: "
              dense
              :rows="rows"
              :columns="columns"
              row-key="name"
            />
            <q-table
              title="Your Benefits: "
              class="tableTwo"
              dense
              :rows="rowsTwo"
              :columns="columnsTwo"
              row-key="nameTwo"
            />
          </div>
          <div class="bottom text-center absolute-bottom">
            <p class="bg-white shadow-1">
           <q-btn
           clickable
            v-ripple
             class="text-teal"
                flat
            to="pcadashboard"
            label="Main menu"/>
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
            <h2 class="text-center">Pending Claim's</h2>
           <div class="info-box">
            <h5>Pending Claim's:</h5>
            <p class="info bg-teal text-white q-pl-md">No pending claims are Found!</p>
           </div>
          </div>
          <div class="bottom text-center absolute-bottom">
            <div class="bg-white shadow-1" style="margin-bottom: 1em;">
               <q-btn
           clickable
            v-ripple
             class="text-teal"
                flat
            to="pcadashboard"
            label="Main menu"/>
            </div>
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
             <h2 class="text-center">Complete Claim's</h2>
           <div class="info-box">
            <h5>Complete Claim's:</h5>
            <p class="info bg-teal text-white q-pl-md">No completed claims are Found!</p>
           </div>

          </div>
          <div class="bottom text-center absolute-bottom">
            <p class="bg-white shadow-1">
              <q-btn
           clickable
            v-ripple
             class="text-teal"
                flat
            to="pcadashboard"
            label="Main menu"/>
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
import { defineComponent } from "vue";
import { ref } from "vue";

/* Table */
const columns = [
  {
    name: "name",
    required: true,
    label: "",
    align: "left",
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "calories",
    align: "center",
    label: "",
    field: "calories",
    sortable: true,
  },
];

const rows = [
  {
    name: "Plan: ",
    calories: "Landlord",
  },
  {
    name: "Plan Expiration: ",
    calories: "01/17/2021",
  },
  {
    name: "Membership Number: ",
    calories: "PCAMN55",
  },
];
/* TableTwo */
const columnsTwo = [
  {
    name: "nameTwo",
    required: true,
    label: "",
    align: "left",
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "caloriesTwo",
    align: "center",
    label: "",
    field: "caloriesTwo",
    sortable: true,
  },
];

const rowsTwo = [
  {
    name: "Emergency Accommodations ",
    caloriesTwo: 3,
  },
  {
    name: "Emergency Maintenance ",
    caloriesTwo: 1,
  },
  {
    name: "Rental Payment ",
    caloriesTwo: 0,
  },
  {
    name: "PCA Liaison ",
    caloriesTwo: 0,
  },
  {
    name: "24/7 PCA Concierge ",
    caloriesTwo: 0,
  },
  {
    name: "Announcements Board ",
    caloriesTwo: 0,
  },
];

export default {
  setup() {
    return {
      slide: ref(1),
      fullscreen: ref(true),
      columns,
      rows,
      columnsTwo,
      rowsTwo,
    };
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Spline+Sans+Mono:wght@300;400;500;600;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Fascinate&display=swap");

.q-table__bottom.row.items-center.justify-end {
  display: none;
}

.slide1-title :is(h1, h2) {
  font-family: "Spline Sans Mono", monospace;
}
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
 // margin-top: 9em;
}

.block.bg-white.shadow-1.q-pa-md {
	margin-bottom: 15em;
}

.q-table__container.q-table--horizontal-separator.column.no-wrap.q-table__card.q-table--dense.q-table--no-wrap.tableTwo {
	margin-top: 1em;
}

.q-carousel__slide {
  background-repeat: no-repeat;
  background-size: contain;
  background-position: bottom;
}

.q-carousel__control.q-carousel__navigation.no-wrap.absolute.flex.q-carousel__navigation--buttons.q-carousel__navigation--bottom {
  color: gray;
}
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
