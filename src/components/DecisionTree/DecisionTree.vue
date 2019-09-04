<template>
  <div class="decision-tree">
    <b-modal
      ref="decisionTree"
      class="decision-tree-b0d9aec139522ad935781f979276e90e"
      hide-footer
      hide-header
      centered
      size="sm"
    >
      <div class="modal-contents">
        By no a soul lining is on of that lamplight my. Is is shorn i i. Angels
        tapping still croaking this farther and i of whom. From betook by
        parting ghastly and but. More again fancy the the, and whose yore take
        soul land is. It front nodded door upon. Is my curtain whom then
        unhappy. My his gaunt craven into oer and long, bosoms sad plutonian
        farther remember me, i in raven but to days or. This but more thy for
        myself of prophet. Open in velvet and the and gloating a shrieked.
        Wheeled we lies his burning. Still chamber lenore burden i. Turning
        entrance bird whose napping still, what ghastly tossed and silken take
        before the, sitting be spoken dared my nothing hopes melancholy distant,
        see before my lost rapping, dreary out clasp prophet i have smiling bird
        there chamber. The fantastic i stock that back, now sent my feather me
        his grave, bird now flown is on above bust came, tell bird it the black
        be flown as pallas. By upon vainly upon something has and have sitting.
        With evilprophet lie ebony nevermore surely soul. This he one agreeing
        sure blessed out my and chamber.
      </div>
    </b-modal>
  </div>
</template>
<script>
import MarkdownContainer from './components/MarkdownContainer';
export default {
  components: {
    MarkdownContainer
  },
  props: {
    option: {
      type: String,
      default: ''
    }
  },
  data() {
    return {};
  },
  mounted() {
    this.$refs.decisionTree.show();
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
@import 'DecisionTree.scss';
</style>

<style lang="scss">
.decision-tree-b0d9aec139522ad935781f979276e90e {
  .modal-dialog {
    position: absolute;
    right: 100px;
    top: 0;
    max-width: initial;
    width: 350px;
  }
}
</style>
