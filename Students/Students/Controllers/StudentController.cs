using Microsoft.AspNetCore.Mvc;
using Students.Model;
using Students.Services;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Students.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        IStudentService _studentService;
        public StudentController(IStudentService studentService)
        {
            _studentService = studentService;
        }
        // GET: api/<StudentController>
        [HttpGet]
        public List<StudentsModel> Get()
        {
            return _studentService.GetAllStudents();
        }

        // GET api/<StudentController>/5
        [HttpGet("{id}")]
        public StudentsModel Get(int id)
        {
            return _studentService.GetStudent(id);
        }

        // POST api/<StudentController>
        [HttpPost]
        public void Post([FromBody] StudentsModel studentsModel)
        {
            _studentService.AddStudent(studentsModel);
        }



        // DELETE api/<StudentController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _studentService.RemoveStudent(id);
        }
    }
}
