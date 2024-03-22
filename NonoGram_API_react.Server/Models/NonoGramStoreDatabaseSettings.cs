namespace NonoGram_API_react.Server.Models;

public class NonoGramStoreDatabaseSettings
{
    public string ConnectionString { get; set; } = null!;

    public string DatabaseName { get; set; } = null!;

    public string BoardsCollectionName { get; set; } = null!;
}
