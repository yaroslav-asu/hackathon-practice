<template>
  <q-btn
    class="button service-features-btn"
    color="primary"
    text-color="white"
    @click="action"
    no-caps
    :ripple="false"
  >
    <div class="content">
      <p class="text">
        {{ featuresCount }} {{ $t("more") }}
      </p>
      <q-icon
        class="icon"
        :name="iconName"
      />
    </div>

  </q-btn>
</template>

<script>
export default {
  name: "FeaturesButton",
  props: {
    featuresCount: {
      type: Number,
      required: true
    },
    iconName: {
      type: String,
      required: true
    },
    action: {
      type: Function,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 25px;
}

.text {
  color: $light;
  font-size: 18px;
}

.icon {
  font-size: 50px;
}

@media (max-width: 600px) {
  .content {
    flex-direction: row !important;
  }
}
</style>
