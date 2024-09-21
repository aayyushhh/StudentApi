using System.ComponentModel.DataAnnotations;

namespace Students.Model
{
    public class StudentsModel
    {
        [Key]
        public int StudentId { get; set; }
        public string StudentName { get; set; }

        public int StudentAge { get; set; }
        public string StudentBranch { get; set; }

        public string StudentEmail { get; set; }

    }
}
