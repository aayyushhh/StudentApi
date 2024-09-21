using Microsoft.EntityFrameworkCore;
using Students.Model;

namespace Students.Data
{
    public class StudentDbContextDb:DbContext
    {
        public DbSet<StudentsModel> Students { get; set; }
       

        public StudentDbContextDb(DbContextOptions dbContextOptions) : base(dbContextOptions) { }


    }
}
