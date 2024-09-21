using Students.Model;

namespace Students.Services
{
    public interface IStudentService
    {
        public void AddStudent(StudentsModel student);
        public void RemoveStudent(int id);
        public StudentsModel GetStudent(int id);

        public List<StudentsModel> GetAllStudents();

    }
}
