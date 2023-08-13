using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace WebApp.Pages
{
    public class AppFormsModel : PageModel
    {
        private readonly ILogger<AppFormsModel> _logger;

        public AppFormsModel(ILogger<AppFormsModel> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {

        }
    }
}