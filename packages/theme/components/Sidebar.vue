<template>
  <aside class="sidebar">
    <template v-if="sidebarDisplay !== 'none'">
      <BloggerInfo :class="{ mobile: sidebarDisplay === 'mobile' }" />
      <hr />
    </template>

    <slot name="top" />

    <NavLinks />

    <slot name="center" />

    <SidebarLinks :depth="0" :items="items" />

    <slot name="bottom" />
  </aside>
</template>

<script src="./Sidebar" />

<style lang="stylus">
.sidebar
  position fixed
  z-index 10
  top $navbarHeight
  left 0
  bottom 0
  box-sizing border-box
  width $sidebarWidth
  margin 0
  background-color var(--background-color)
  font-size 16px
  overflow-y auto
  box-shadow 2px 0 8px var(--card-shadow-color)

  .theme-container.no-navbar &
    top 0

  .nav-links ul, .sidebar-links ul
    padding 0
    margin 0
    list-style-type none

  a
    display inline-block
    color var(--text-color)

  .blogger-info-wrapper.mobile
    display none

  .blogger-info-wrapper.mobile + hr
    display none

  .nav-links
    display none
    border-bottom 1px solid var(--border-color)
    padding 0.5rem 0 0.75rem 0

    a
      font-weight 600

    .nav-item, .repo-link
      display block
      line-height 1.25rem
      font-size 1.1em
      padding 0.5rem 0 0.5rem 1.5rem

  & > .sidebar-links
    padding 1.5rem 0

    & > li > a.sidebar-link
      font-size 1.1em
      line-height 1.7
      font-weight bold

    & > li:not(:first-child)
      margin-top 0.75rem

  // narrow desktop / iPad
  @media (max-width: $MQNarrow)
    width $mobileSidebarWidth
    font-size 15px

  @media (min-width: ($MQMobile + 1px))
    .theme-container.no-sidebar &
      display none

  // wide mobile
  @media (max-width: $MQMobile)
    transform translateX(-100%)
    transition transform 0.2s ease
    box-shadow none

    .theme-container.sidebar-open &
      transform translateX(0)
      box-shadow 2px 0 8px var(--card-shadow-color)

    .theme-container.no-navbar &
      top 0

    .blogger-info-wrapper.mobile
      display block

    .blogger-info-wrapper.mobile + hr
      display block
      margin-top 16px

    .nav-links
      display block

      .dropdown-wrapper .nav-dropdown .dropdown-item a.router-link-active::after
        top calc(1rem - 2px)

    & > .sidebar-links
      padding 1rem 0
</style>
