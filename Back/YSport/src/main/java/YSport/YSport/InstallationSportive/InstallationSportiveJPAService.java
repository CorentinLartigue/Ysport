package YSport.YSport.InstallationSportive;


import YSport.YSport.Exceptions.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@Qualifier("jpa")
public class InstallationSportiveJPAService implements InstallationSportiveService {

    @Autowired
    private InstallationSportiveRepository installationSportiveRepository;

    public InstallationSportiveJPAService(InstallationSportiveRepository installationSportiveRepository) {
        this.installationSportiveRepository = installationSportiveRepository;
    }

    @Override
    public List<InstallationSportive> getAll() {
        return installationSportiveRepository.findAll();
    }

    @Override
    public InstallationSportive getById(Long id) {
        Optional<InstallationSportive> installationSportive = installationSportiveRepository.findById(id);
        if (installationSportive.isPresent()) {
            return installationSportive.get();
        } else {
            throw new ResourceNotFoundException("InstallationSportiveRepository", id);
        }
    }
}
