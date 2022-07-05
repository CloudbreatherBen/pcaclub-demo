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
            <h2 class="text-center">Account info</h2>

            <q-table
              title="Account Info: "
              dense
              :rows="rows"
              :columns="columns"
              row-key="name"
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
            <h2 class="text-center">Tenant Claims</h2>
           <div class="info-box">
            <h5>My Claims</h5>
            <p class="info bg-teal text-white q-pl-md">No claims are found.</p>
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
             <h2 class="text-center">Pending Tenants</h2>
           <div class="info-box">
               <q-table
              title=" "
              dense
              :rows="rowsTenants"
              :columns="columnsTenants"
              row-key="nameTenants"
            />
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

      <q-carousel-slide name="4" img-src="~assets/4.png">
        <div class="slide4">
          <div class="image-logo">
            <img src="~assets/PCA_logo.png" alt="" width="200" />
          </div>
          <!-- <div class="slide1-title text-center">
          <h1 class="text-weight-bold">PCA Club</h1>
          </div>-->
          <div class="block bg-white shadow-1 q-pa-md">
             <h2 class="text-center">Approved Tenants</h2>
           <div class="info-box">
               <q-table
              title=" "
              dense
              :rows="rowsApprovedTenants"
              :columns="columnsApprovedTenants"
              row-key="nameTenants"
            />
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

      <q-carousel-slide name="5" img-src="~assets/4.png">
        <div class="slide5">
          <div class="image-logo">
            <img src="~assets/PCA_logo.png" alt="" width="200" />
          </div>
          <!-- <div class="slide1-title text-center">
          <h1 class="text-weight-bold">PCA Club</h1>
          </div>-->
          <div class="block bg-white shadow-1 q-pa-md">
             <h2 class="text-center">Declined Tenants</h2>
           <div class="info-box">
               <q-table
              title=" "
              dense
              :rows="rowsDeclinedTenants"
              :columns="columnsDeclinedTenants"
              row-key="nameDeclinedTenants"
            />
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
  {
    name: "Property Number: ",
    calories: "PCM055",
  },
];
/* Table -tenants*/
const columnsTenants = [
  {
    name: "nameTenants",
    required: true,
    label: "",
    align: "left",
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "calorieTenants",
    align: "center",
    label: "",
    field: "caloriesTenants",
    sortable: true,
  },
];

const rowsTenants = [
  {
    name: "Tenant name: ",
    caloriesTenants: " ",
  },
  {
    name: "Tenant Email: ",
    caloriesTenants: " ",
  },
  {
    name: "Status: ",
    caloriesTenants: " ",
  },

];
/* Table Approved-tenants*/
const columnsApprovedTenants = [
  {
    name: "nameApprovedTenants",
    required: true,
    label: "",
    align: "left",
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "calorieApprovedTenants",
    align: "center",
    label: "",
    field: "caloriesApprovedTenants",
    sortable: true,
  },
];

const rowsApprovedTenants = [
  {
    name: "Tenant name: ",
    caloriesTenants: " ",
  },
  {
    name: "Tenant Email: ",
    caloriesTenants: " ",
  },
  {
    name: "Status: ",
    caloriesTenants: " ",
  },

];
/* Table Declined-tenants*/
const columnsDeclinedTenants = [
  {
    name: "nameDeclinedTenants",
    required: true,
    label: "",
    align: "left",
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "calorieDeclinedTenants",
    align: "center",
    label: "",
    field: "caloriesDeclinedTenants",
    sortable: true,
  },
];

const rowsDeclinedTenants = [
  {
    name: "Tenant name: ",
    caloriesDeclinedTenants: " ",
  },
  {
    name: "Tenant Email: ",
    caloriesDeclinedTenants: " ",
  },
  {
    name: "Status: ",
    caloriesDeclinedTenants: " ",
  },

];


export default {
  setup() {
    return {
      slide: ref(1),
      fullscreen: ref(true),
      columns,
      rows,
      columnsTenants,
      rowsTenants,
      columnsApprovedTenants,
      rowsApprovedTenants,
      columnsDeclinedTenants,
      rowsDeclinedTenants,

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
  margin-top: 9em;
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
