// PowerBuilder.Server/Program.cs
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.FileProviders;
using Microsoft.Extensions.Hosting;
using System.IO;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Serve static files for the SPA client
builder.Services.AddSpaStaticFiles(configuration =>
{
    configuration.RootPath = Path.Combine("..", "powerbuilder.client", "dist");
});

var app = builder.Build();

app.UseDefaultFiles();
app.UseStaticFiles();
app.UseSpaStaticFiles();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();

// Fallback to the client-side application
app.MapFallbackToFile("/index.html", new StaticFileOptions
{
    FileProvider = new PhysicalFileProvider(Path.Combine(builder.Environment.ContentRootPath, "..", "powerbuilder.client", "dist"))
});

app.Run();
