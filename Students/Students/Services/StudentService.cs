using Students.Model;
using Students.Repository;

namespace Students.Services
{
    public class StudentService : IStudentService
    {
        IStudentRepository _studentRepository;

        public StudentService(IStudentRepository studentRepository)
        {
            _studentRepository = studentRepository;
        }
        public void AddStudent(StudentsModel student)
        {
           _studentRepository.AddStudent(student);
        }

        public List<StudentsModel> GetAllStudents()
        {
            return _studentRepository.GetAllStudents();
        }

        public StudentsModel GetStudent(int id)
        {
           return  _studentRepository.GetStudent(id);
        }

        public void RemoveStudent(int id)
        {
            _studentRepository.RemoveStudent(id);
        }
    }
}
