<template>
  <div class="logo">
    <img src="~/assets/PCA_logo.png" alt="" />
  </div>
  <div class="pca-title">
    <h1><span class="virtual">Virtual</span> property MANAGEMENT</h1>
  </div>
  <div class="q-pa-md">
    <div class="dashboard shadow-1">
      <div class="row">
        <div class="col">
          <div class="opt-icon">
            <q-btn clickable v-ripple to="mydashboard"
              ><img src="~/assets/website-interface-1.png" alt="" width="100" />
            </q-btn>
            <h3>My Dashboard</h3>
          </div>
        </div>
        <div class="col">
          <div class="opt-icon">
            <q-btn clickable v-ripple to="memberservices"
              ><img src="~/assets/building-website-1.png" alt="" width="100"
            /></q-btn>
            <h3>Member Services</h3>
          </div>
        </div>
        <div class="col">
          <div class="opt-icon">
            <q-btn clickable v-ripple to="myprofile"
              ><img src="~/assets/arranging-files-1.png" alt="" width="100"
            /></q-btn>
            <h3>My Profile</h3>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <div class="opt-icon">
            <q-btn clickable v-ripple to="tenantannouncements"
              ><img src="~/assets/announcement-1.png" alt="" width="100"
            /></q-btn>
            <h3>Tenant Announcements</h3>
          </div>
        </div>
        <div class="col">
          <div class="opt-icon">
            <q-btn clickable v-ripple to="newsletter"
              ><img src="~/assets/email-1.png" alt="" width="100"
            /></q-btn>
            <h3>Newsletter</h3>
          </div>
        </div>
        <div class="col">
          <div class="opt-icon">
            <q-btn clickable v-ripple to="disasternetwork"
              ><img src="~/assets/virtual-assistant-1.png" alt="" width="100"
            /></q-btn>
            <h3>Disaster Network</h3>
          </div>
        </div>
      </div>
    </div>

    <div class="bottom-under absolute-bottom ">
      <p>
        For more <span class="text-teal">info</span> visit the
        <span class="text-teal">Desktop version.</span
        ><span>&nbsp;<q-icon color="teal" name="desktop_windows" /></span>
      </p>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
});
</script>

<style lang="scss">
.q-header.q-layout__section--marginal.fixed-top {
  display: none;
}

.logo {
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: center;

  & img {
    object-fit: cover;
    width: 150px;
    height: 150px;
  }
}

.pca-title {
  max-width: 200px;
  margin-left: auto;
  margin-right: auto;
  margin-top: -6em;

  & h1 {
    text-transform: uppercase;
    font-size: 2em;
    line-height: unset;
    text-align: center;

    &.virtual {
      color: #009688;
      font-weight: bold;
      font-size: 1.3em;
    }
  }
}

.dashboard i.q-icon.notranslate.material-icons {
  font-size: 72px;
  padding: 0.5em;
}

.dashboard .opt-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: flex-end;

  & .q-btn {
    //	position: unset !important;
  }

  & .q-btn::before {
    box-shadow: unset;
  }

  & h3 {
    font-size: 1em;
    text-align: center;
    line-height: unset;
  }
}
</style>
