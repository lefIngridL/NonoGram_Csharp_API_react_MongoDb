using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System.Text.Json.Serialization;
using NonoGram_API_react.Server.Controllers;
using NonoGram_API_react.Server.Services;

namespace NonoGram_API_react.Server.Models;

public class Board
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; set; }

    [BsonElement("id")]
    [JsonPropertyName("BoardId")]
    public double BoardId { get; set; }
    [BsonElement("size")]
    [JsonPropertyName("Size")]
    public int Size { get; set; } = 0!;
    [BsonElement("rows")]
    [JsonPropertyName("Rows")]
    public List<List<int>> Rows { get; set; } = null!;
    [BsonElement("columns")]
    [JsonPropertyName("Columns")]
    public List<List<int>> Columns { get; set; } = null!;
    [BsonElement("grid")]
    [JsonPropertyName("Grid")]
    public List<List<int>> Grid { get; set; } = null!;
}

