<template>
  <AppPageTemplate
    :title="$t('pages.settings')"
    editable-user-image
  >
    <q-tabs
      align="left"
      no-caps
      v-model="activeTab"
    >
      <q-tab
        class="tab"
        :ripple="false"
        v-for="tab in tabs"
        :key="tab"
        :name="tab.name"
        :label="tab.label"
      />
      <q-separator class="separator"/>
    </q-tabs>
    <q-tab-panels
      v-model="activeTab"
      swipeable
      vertical
      class="tab-panels"
    >
      <q-tab-panel
        name="password"
        class="tab-panel"
      >
        <PasswordSettingsTab/>
      </q-tab-panel>
      <q-tab-panel
        name="profile"
        class="tab-panel"
      >
        <ProfileSettingsTab/>
      </q-tab-panel>
      <q-tab-panel
        name="language"
        class="tab-panel"
      >
        <LanguageSettingsTab/>
      </q-tab-panel>
    </q-tab-panels>
  </AppPageTemplate>
</template>

<script>
import PasswordSettingsTab from "components/Pages/App/Settings/Tabs/Password/PasswordSettingsTab";
import ProfileSettingsTab from "components/Pages/App/Settings/Tabs/Profile/ProfileSettingsTab";
import LanguageSettingsTab from "components/Pages/App/Settings/Tabs/Language/LanguageSettingsTab";
import AppPageTemplate from "src/templates/AppPageTemplate/AppPageTemplate";

export default {
  name: "SettingsPage",
  components: {
    ProfileSettingsTab,
    PasswordSettingsTab,
    LanguageSettingsTab,
    AppPageTemplate
  },
  data() {
    return {
      activeTab: "profile"
    };
  },
  computed: {
    tabs() {
      return {
        profile: {
          name: "profile",
          label: this.$t("settings.profile.title")
        },
        password: {
          name: "password",
          label: this.$t("settings.password.title")
        },
        language: {
          name: "language",
          label: this.$t("settings.language.title")
        }
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.app-page {
  .wrapper {
    border-radius: 20px;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    box-shadow: $lite-shadow-1;


    .top-image {
      height: 25%;
      width: 100%;
      background: rgb(206, 75, 245);
      background: linear-gradient(30deg, rgba(206, 75, 245, 1) 0%, rgba(254, 245, 155, 1) 44%, rgba(245, 72, 112, 1) 100%);
      border-radius: 20px 20px 0 0;
      overflow: hidden;
    }

    .content {
      height: 75%;
      justify-self: end;
      padding: 0 40px 30px;
      display: flex;
      flex-direction: column;

      .top-part {
        display: flex;
        align-items: center;
        height: 120px;
        position: relative;
        margin-bottom: 20px;

        .user-image-wrapper {
          box-sizing: content-box;
          align-self: end;
          width: 150px;
          height: 150px;
          border: 3px solid $light;
          margin-right: 20px;
          box-shadow: $lite-shadow-2;

        }

        .text {
          .title {
            font-size: 35px;
            font-weight: 600;
            color: $dark;
            opacity: 1;

          }
        }
      }

      .middle-part {
        display: flex;
        flex-direction: column;
        overflow: auto;

        .separator {
          height: 2px;
          background-color: $grey;
          position: absolute;
          bottom: 0;
          width: 100%;
        }

        .tab-panels {
          overflow-y: auto;
        }
      }
    }
  }
}


</style>
<style lang="scss">
.app-page {

  @media (max-width: 1024px) {
    .settings_section__content {
      margin-right: 0 !important;
      width: 60% !important;
    }
  }
  @media (max-width: 768px) {
    .settings_section {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;

      .settings_section__content {
        width: 100% !important;
      }
    }
    .password-tab_btn-section {
      justify-content: center;
    }
    .q-field__bottom {
      padding-right: 0;
      text-align: center;
    }
  }
}
</style>
