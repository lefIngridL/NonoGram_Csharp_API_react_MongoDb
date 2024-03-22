using NonoGram_API_react.Server.Models;
using NonoGram_API_react.Server.Services;
using Microsoft.AspNetCore.Mvc;

namespace NonoGram_API_react.Server.Controllers;
[ApiController]
[Route("[controller]")]
public class BoardsController : ControllerBase
{
    private readonly BoardsService _boardsService;
    public BoardsController(BoardsService boardsService) =>
        _boardsService = boardsService;

    [HttpGet]
    public async Task<List<Board>> Get() =>
        await _boardsService.GetAsync();

    [HttpGet("{id:length(24)}")]
    public async Task<ActionResult<Board>> Get(string id)
    {
        var board = await _boardsService.GetAsync(id);

        if (board is null)
        {
            return NotFound();
        }

        return board;
    }

    [HttpPost]
    public async Task<IActionResult> Post(Board newBoard)
    {
        await _boardsService.CreateAsync(newBoard);

        return CreatedAtAction(nameof(Get), new { id = newBoard.Id }, newBoard);
    }

    [HttpPut("{id:length(24)}")]
    public async Task<IActionResult> Update(string id, Board updatedBoard)
    {
        var board = await _boardsService.GetAsync(id);

        if (board is null) 
        { 
            return NotFound(); 
        }

        updatedBoard.Id = board.Id; 

        await _boardsService.UpdateAsync(id, updatedBoard);

        return NoContent();
    }

    [HttpDelete("{id:length(24)}")]
    public async Task<IActionResult> Delete(string id)
    {
        var board = await _boardsService.GetAsync(id);

        if (board is null)
        {
            return NotFound();
        }

        await _boardsService.RemoveAsync(id);

        return NoContent();
    }
}
