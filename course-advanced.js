// 本檔只維護「進階程式設計」的章節、單元與教材連結。
// 增刪科目、更名、排序請改 courses-data.js。
// 單元主教材：url；附加教材：resources。
(function () {
  const subject = window.TEACHING_COURSES.subjects.find(s => s.id === "advanced");
  if (!subject) return;
  subject.chapters = [];
})();
