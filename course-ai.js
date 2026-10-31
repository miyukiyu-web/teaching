// 本檔只維護「從零開始學AI」的章節、單元與教材連結。
// 增刪科目、更名、排序請改 courses-data.js。
// 單元主教材：url；附加教材：resources。
(function () {
  const subject = window.TEACHING_COURSES.subjects.find(s => s.id === "ai");
  if (!subject) return;
  subject.chapters = [];
})();
