using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace WebApp.Pages
{
    public class AppManagerModel : PageModel
    {
        private readonly ILogger<AppManagerModel> _logger;

        public AppManagerModel(ILogger<AppManagerModel> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {

        }
    }
}