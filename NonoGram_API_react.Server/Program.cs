using Microsoft.Extensions.FileProviders;
using NonoGram_API_react.Server.Models;
using NonoGram_API_react.Server.Services;
using NonoGram_API_react.Server.Controllers;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.Configure<NonoGramStoreDatabaseSettings>(
    builder.Configuration.GetSection("NonoGramStoreDatabase"));

builder.Services.AddSingleton<BoardsService>();
builder.Services.AddControllers()
    .AddJsonOptions(
        options => options.JsonSerializerOptions.PropertyNamingPolicy = null);
//builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

app.UseDefaultFiles();
//

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.UseStaticFiles(new StaticFileOptions
{
    FileProvider = new PhysicalFileProvider(
        Path.Combine(builder.Environment.ContentRootPath, "..", "nonogram_api_react.client", "dist")),
    RequestPath = ""
});

app.MapFallbackToFile("/index.html");

app.Run();







