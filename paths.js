const paths = {
  toTopicPage(slug) {
    return `/topics/${slug}`;
  },
  toNoteDetailPage(slug, noteId) {
    return `/topics/${slug}/notes/${noteId}`
  }
};

export default paths;
