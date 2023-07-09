using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace WebApp.Pages
{
    public class FileManagerModel : PageModel
    {
        private readonly ILogger<FileManagerModel> _logger;

        public FileManagerModel(ILogger<FileManagerModel> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {

        }
    }
}