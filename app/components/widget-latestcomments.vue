<template>

    <div class="uk-grid pk-grid-large pk-width-sidebar-large" data-uk-grid-margin>
        <div class="pk-width-content uk-form-horizontal">
            <div class="uk-form-row">
                <label for="form-title" class="uk-form-label">{{ 'Title' | trans }}</label>
                <div class="uk-form-controls">
                    <input id="form-title" class="uk-form-width-large" type="text" name="title" v-model="widget.title"
                           v-validate:required>
                    <p class="uk-form-help-block uk-text-danger"
                       v-show="form.title.invalid">{{ 'Title cannot be blank.' | trans }}</p>
                </div>
            </div>
            <div class="uk-form-row">
                <label for="form-count" class="uk-form-label">{{ 'Count' | trans }}</label>
                <div class="uk-form-controls">
                    <input id="form-count" class="uk-form-width-small uk-text-right" type="number" name="count"
                           v-model="widget.data.count" min="0" number>
                </div>
            </div>
            <div class="uk-form-row">
                <label for="form-showmeta" class="uk-form-label">{{ 'Show Meta' | trans }}</label>
                <div class="uk-form-controls uk-form-controls-text">
                    <input id="form-showmeta" type="checkbox" v-model="widget.data.showmeta">
                </div>
            </div>
            <div class="uk-form-row">
                <label for="form-showcomment" class="uk-form-label">{{ 'Show Comment' | trans }}</label>
                <div class="uk-form-controls uk-form-controls-text">
                    <input id="form-showcomment" type="checkbox" v-model="widget.data.showcomment">
                </div>
            </div>
            <div class="uk-form-row" v-if="widget.data.showcomment">
                <label for="form-truncatecomment" class="uk-form-label">{{ 'Truncate Comment' | trans }}</label>
                <div class="uk-form-controls">
                    <input id="form-truncatecomment" class="uk-form-width-small uk-text-right" type="number" name="truncatecomment"
                           v-model="widget.data.truncatecomment" min="0" number>
                </div>
            </div>
        </div>
        <div class="pk-width-sidebar">
            <partial name="settings"></partial>
        </div>
    </div>

</template>

<script>
module.exports = {
    section: {
        label: 'Settings'
    },
    replace: false,
    props: ['widget', 'config', 'form'],
    data() {
        return {
        }
    },
    created() {
        this.$options.partials = this.$parent.$options.partials;
        this.$set('widget.data', _.merge({
            count: 5,
            showmeta: true,
            showcomment: true,
            truncatecomment: 150
        }, this.widget.data));
    }
};
window.Widgets.components['spqr-latestcomments:settings'] = module.exports;
</script>