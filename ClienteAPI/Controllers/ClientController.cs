using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ClienteAPI.Models; 

[Route("api/[controller]")]
[ApiController]
public class ClientController : ControllerBase
{
    private readonly ClientContext _context;

    public ClientController(ClientContext context)
    {
        _context = context;
    }

    [HttpGet("storeprocedure")]
    public async Task<ActionResult<IEnumerable<Client>>> GetClientsStoreProcedure(int pageNumber, int pageSize)
    {
        var clientes = await _context.cliente
            .FromSqlRaw("CALL GetClientesPaged({0}, {1})", pageNumber, pageSize)
            .ToListAsync();
        return Ok(clientes);
    }

    [HttpGet("linq")]
    public async Task<ActionResult<IEnumerable<Client>>> GetClientsLinq(int pageNumber, int pageSize)
    {
        var clients = await _context.cliente
            .Skip((pageNumber - 1) * pageSize)
            .Take(pageSize)
            .ToListAsync();

        return Ok(clients);
    }
}