using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace WebApp.Pages
{
    public class KanbanModel : PageModel
    {
        private readonly ILogger<KanbanModel> _logger;

        public KanbanModel(ILogger<KanbanModel> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {

        }
    }
}