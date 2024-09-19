package YSport.YSport.InstallationSportive;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cartes")
@CrossOrigin(origins = "http://localhost:5173")
public class InstallationSportiveController {

    private InstallationSportiveService installationSportiveService;

    @Autowired
    public InstallationSportiveController(InstallationSportiveService installationSportiveService){
        this.installationSportiveService=installationSportiveService;
    }

    @GetMapping("")
    public List<InstallationSportive> getAll() {
        return installationSportiveService.getAll();
    }

    @GetMapping("/{id}")
    public InstallationSportive getById(@PathVariable Long id) {
        return installationSportiveService.getById(id);
    }
}

