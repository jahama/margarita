<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="sizingProperties.width"
    :height="sizingProperties.height"
    :viewBox="sizingProperties.viewBox"
    class="ma-icon"
    :aria-labelledby="id"
    role="presentation"
  >
    <title :id="id">
      {{ iconName }}
    </title>
    <g :fill="tone">
      <component :is="componentLoader" />
    </g>
  </svg>
</template>

<script>
import uuid from '@margarita/utils/uuid'

import availableIcons from './availableIcons'

import { tones } from '../../tokens'

/**
 * Renders an icon component following the Design System guidelines
 *
 * [Component's API documentation](https://holaluz.github.io/margarita/?path=/story/components-icon--icon)
 */
export default {
  name: 'MaIcon',

  props: {
    /**
     * Sets which icon should be displayed
     * @values ArrowRight, ArrowLeft, ArrowUp, ArrowDown, ChevronRight, ChevronLeft, ChevronUp, ChevronDown, ChevronLastPage, ChevronFirstPage, ArrowDropUp, ArrowDropOrder, Change, Sync, Refresh, Document, DocumentDownload, DocumentUpload, DocumentInvoice, DocumentCopy, Add, Checkmark, Close, Edit, Exit, Link, Search, List, Menu, Power, More, MapPin, Filter, Play, Home, View, Share, Calendar, Upload, Download, Settings, Delete, Lock, CreditCard, Deny, Person, PersonAdd, PersonDelete, Lightbulb, Gas, Plug, FeedbackSuccess, FeedbackError, FeedbackWarning, FeedbackInfo, FeedbackQuestion, HelpInfo, HelpQuestion, FaceSad, FaceNeutral, FaceHappy, ThumbsUp, ThumbsDown, Phone, ChatBubble, Email, EmailReply, Facebook, Instagram, LinArrowRight, ChevronRight, ChevronLastPage, ChevronFirstPage, ArrowDropUp, ArrowDropOrder, Change, Sync, Refresh, Document, DocumentDownload, DocumentUpload, DocumentInvoice, DocumentCopy, Add, Checkmark, Close, Edit, Exit, Link, Search, List, Menu, Power, More, MapPin, Filter, Play, Home, View, Share, Calendar, Upload, Download, Settings, Delete, Lock, CreditCard, Deny, Person, PersonAdd, PersonDelete, Lightbulb, Gas, Plug, FeedbackSuccess, FeedbackError, FeedbackWarning, FeedbackInfo, FeedbackQuestion, HelpInfo, HelpQuestion, FaceSad, FaceNeutral, FaceHappy, ThumbsUp, ThumbsDown, Phone, ChatBubble, Email, EmailReply, Facebook, Instagram, Linkedin, Messenger, Twitter, Whatsapp, Youtube, Linkedin, Messenger, Twitter, Whatsapp, Youtube, Logo
     */
    icon: {
      type: String,
      default: '',
      validator: function (value) {
        if (!value) return true
        return availableIcons.includes(value)
      },
    },

    /**
     * Sets icon's id
     */
    id: {
      type: String,
      default: uuid,
    },

    /**
     * Sets icon's size
     * @values small, medium, large
     */
    size: {
      type: String,
      default: 'medium',
      validator: (val) => ['small', 'medium', 'large'].includes(val),
    },

    /**
     * Sets icon's color tone
     * @values white, red, pink, blue, green, yellow, gray-darker, gray-dark, gray
     */
    tone: {
      type: String,
      default: 'currentColor',
      validator: (val) => Object.keys(tones).includes(val),
    },

    /**
     * Sets icon's title
     */
    title: {
      type: String,
      default: '',
    },
  },

  computed: {
    componentLoader() {
      if (!this.icon) return null

      return () => import(/* webpackMode: "eager" */ `./Icons/${this.icon}.vue`)
    },

    iconName() {
      return this.title ? this.title : `${this.icon}Icon`
    },

    sizingProperties() {
      const sizingProperties = {
        small: {
          width: '16',
          height: '16',
          viewBox: '0 0 24 24',
        },
        medium: {
          width: '24',
          height: '24',
          viewBox: '0 0 24 24',
        },
        large: {
          width: '32',
          height: '32',
          viewBox: '0 0 24 24',
        },
      }

      return sizingProperties[this.size]
    },
  },
}
</script>

<style scoped>
svg {
  display: inline-block;
  vertical-align: baseline;
}
</style>
