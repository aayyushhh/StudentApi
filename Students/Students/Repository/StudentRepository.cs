using Students.Data;
using Students.Model;
using Students.Services;

namespace Students.Repository
{
    public class StudentRepository : IStudentRepository
    {
        StudentDbContextDb _contextDb;
        public StudentRepository(StudentDbContextDb contextDb)
        {
            _contextDb = contextDb;
        }
        public void AddStudent(StudentsModel student)
        {
            _contextDb.Students.Add(student);
            _contextDb.SaveChanges();
        }

        public List<StudentsModel> GetAllStudents()
        {
            return _contextDb.Students.ToList();
        }

        public StudentsModel GetStudent(int id)
        {
            var student = _contextDb.Students.SingleOrDefault(x => x.StudentId == id);
            return student;
        }

        public void RemoveStudent(int id)
        {
            var student = _contextDb.Students.SingleOrDefault(x => x.StudentId == id);
            _contextDb.Remove(student);
            _contextDb.SaveChanges(true);
        }
    }
}
