using NonoGram_API_react.Server.Models;
using NonoGram_API_react.Server.Controllers;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace NonoGram_API_react.Server.Services;

public class BoardsService
{
    private readonly IMongoCollection<Board> _boardsCollection;

    public BoardsService(
        IOptions<NonoGramStoreDatabaseSettings> nonoGramStoreDatabaseSettings)
    {
        var mongoClient = new MongoClient(
            nonoGramStoreDatabaseSettings.Value.ConnectionString);

        var mongoDatabase = mongoClient.GetDatabase(
            nonoGramStoreDatabaseSettings.Value.DatabaseName);

        _boardsCollection = mongoDatabase.GetCollection<Board>(
            nonoGramStoreDatabaseSettings.Value.BoardsCollectionName);
    }

    public async Task<List<Board>> GetAsync() =>
        await _boardsCollection.Find(_ => true).ToListAsync();

    public async Task<Board?> GetAsync(string id) =>
        await _boardsCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

    public async Task CreateAsync(Board newBoard) =>
        await _boardsCollection.InsertOneAsync(newBoard);

    public async Task UpdateAsync(string id, Board updatedBoard) =>
        await _boardsCollection.ReplaceOneAsync(x => x.Id == id, updatedBoard);

    public async Task RemoveAsync(string id) =>
        await _boardsCollection.DeleteOneAsync(x => x.Id == id);
}
