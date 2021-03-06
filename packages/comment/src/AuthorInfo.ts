/* global COMMENT_OPTIONS */
import { Component, Vue } from "vue-property-decorator";
import AuthorIcon from "@mr-hope/vuepress-shared-utils/icons/AuthorIcon.vue";
import { CommentOptions } from "../types";
import { i18n } from "@mr-hope/vuepress-shared-utils";

// eslint-disable-next-line @typescript-eslint/naming-convention
@Component({ components: { AuthorIcon } })
export default class AuthorInfo extends Vue {
  private commentOption: CommentOptions = COMMENT_OPTIONS;

  private get author(): string {
    const { author } = this.$frontmatter;

    return (
      (author as string) ||
      (author === false ? "" : this.commentOption.author || "")
    );
  }

  private get hint(): string {
    return (this.$themeLocaleConfig.blog || i18n.getDefaultLocale().blog)
      .author;
  }
}
