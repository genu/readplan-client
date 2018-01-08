<template lang="pug">
  v-ons-page
    v-ons-toolbar
      div.center Books
      div.right: v-ons-toolbar-button(@click="addBook"): v-ons-icon(icon="fa-plus")
    v-ons-list
      v-ons-list-item(v-for="book in books")
        | {{book.name}} ({{book.pages}} pages)
        v-ons-button(modifier="quiet", @click="remove(book)") Remove
    div
      span Total Pages: {{totalPages}}
    // Add Book modal
    v-ons-modal(:visible="isAddingBook", :options="{animation: 'lift'}")
      v-ons-page
        v-ons-toolbar
          div.left: v-ons-toolbar-button(@click="isAddingBook = false") Cancel
          div.center Add Book
          div.right: v-ons-toolbar-button(@click="isAddingManualBook = true") Manual
        p: v-ons-search-input.search(placeholder="Search for title, author, or ISBN")

        // Add manual book modal
        v-ons-card(v-show="isAddingManualBook")
          div.content
            v-ons-list
              v-ons-list-header Book Information
              v-ons-list-item: div.center: v-ons-input(placeholder="Book Name", v-model="manualBook.name")
              v-ons-list-item: div.center: v-ons-input(placeholder="Book Author", v-model="manualBook.author")
              v-ons-list-item: div.center: v-ons-input(placeholder="Number of Pages", v-model="manualBook.pages")
              v-ons-list-header Scheduling
              v-ons-list-item: div.center: v-ons-input(placeholder="When do you want to finish this by?", v-model="manualBook.finishDate", type="date")
              v-ons-list-item: ons-button(modifier="large", @click="addManualBook(manualBook)") Add Book
</template>
<script>
import { extend } from "lodash";

export default {
  data() {
    return {
      isAddingBook: false,
      isAddingManualBook: false,
      manualBook: {
        name: "test"
      },
      books: [],
      totalPages: 0
    };
  },
  watch: {
    books: function() {
      let pages = 0;
      this.$dexie.books
        .each(book => {
          pages += parseInt(book.pages);
        })
        .then(books => {
          this.totalPages = pages;
        });
    }
  },
  created() {
    this.$dexie.books.toArray().then(books => (this.books = books));
  },
  methods: {
    addBook() {
      this.isAddingBook = true;
    },
    addManualBook(book) {
      this.$dexie.books.put(book);
      this.$dexie.books.toArray().then(books => (this.books = books));
    },
    remove(book) {
      this.$dexie.books
        .where("id")
        .equals(book.id)
        .delete()
        .then(() => {
          this.$ons.notification.toast(`${book.name} removed`, {
            timeout: 2500
          });
          this.$dexie.books.toArray().then(books => (this.books = books));
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.search {
  width: 80%;
}
</style>
