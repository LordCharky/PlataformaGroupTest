using Microsoft.EntityFrameworkCore;
using ClienteAPI.Models;

public class ClientContext : DbContext
{
    public ClientContext(DbContextOptions<ClientContext> options) : base(options) { }

    public DbSet<Client> cliente { get; set; }
}
